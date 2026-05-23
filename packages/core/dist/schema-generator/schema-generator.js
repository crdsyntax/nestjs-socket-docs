"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaGenerator = void 0;
const METADATA_KEYS = {
    API_MODEL_PROPERTIES: 'swagger:apiModelProperties',
    API_MODEL_PROPERTIES_ARRAY: 'swagger:apiModelPropertiesArray',
    API_MODEL_PROPERTIES_SLASH: 'swagger/apiModelProperties',
    API_MODEL_PROPERTIES_ARRAY_SLASH: 'swagger/apiModelPropertiesArray',
};
class SchemaGenerator {
    /**
     * Genera un JSON Schema a partir de una clase decorada con @ApiProperty() de NestJS/Swagger
     */
    static generate(target, visited = new Set()) {
        if (!target)
            return { type: 'object' };
        if (typeof target !== 'function' && typeof target !== 'object') {
            return { type: 'object' };
        }
        // Protección contra referencias circulares
        if (visited.has(target)) {
            return { type: 'object', description: 'Referencia circular' };
        }
        visited.add(target);
        const prototype = typeof target === 'function' ? target.prototype : target;
        const constructor = typeof target === 'function' ? target : target.constructor;
        // Recolectar todos los nombres de propiedades posibles
        const propNames = new Set();
        // 1. Recorrer la cadena de prototipos (soporte a herencia)
        let currentProto = prototype;
        while (currentProto && currentProto !== Object.prototype) {
            // Metadatos de Swagger (array)
            const arrayMeta = Reflect.getMetadata(METADATA_KEYS.API_MODEL_PROPERTIES_ARRAY, currentProto) ||
                Reflect.getMetadata(METADATA_KEYS.API_MODEL_PROPERTIES_ARRAY_SLASH, currentProto) || [];
            arrayMeta.forEach((p) => propNames.add(p.replace(/^:/, '')));
            // Propiedades del prototipo
            Object.getOwnPropertyNames(currentProto)
                .filter(p => p !== 'constructor')
                .forEach(p => propNames.add(p));
            currentProto = Object.getPrototypeOf(currentProto);
        }
        // 2. Metadatos en el constructor
        const constArrayMeta = Reflect.getMetadata(METADATA_KEYS.API_MODEL_PROPERTIES_ARRAY, constructor) ||
            Reflect.getMetadata(METADATA_KEYS.API_MODEL_PROPERTIES_ARRAY_SLASH, constructor) || [];
        constArrayMeta.forEach((p) => propNames.add(p.replace(/^:/, '')));
        // 3. Soporte al Swagger CLI Plugin (_METADATA_FACTORY)
        if (constructor && typeof constructor._METADATA_FACTORY === 'function') {
            try {
                const factoryMetadata = constructor._METADATA_FACTORY();
                if (factoryMetadata) {
                    Object.keys(factoryMetadata).forEach(p => propNames.add(p));
                }
            }
            catch (e) {
                // Ignorar errores en factory
            }
        }
        const schema = {
            type: 'object',
            properties: {},
            example: {},
        };
        const required = [];
        // Procesar cada propiedad
        propNames.forEach((propertyName) => {
            // Obtener metadatos
            let metadata = Reflect.getMetadata(METADATA_KEYS.API_MODEL_PROPERTIES, prototype, propertyName) ||
                Reflect.getMetadata(METADATA_KEYS.API_MODEL_PROPERTIES, constructor, propertyName) ||
                Reflect.getMetadata(METADATA_KEYS.API_MODEL_PROPERTIES_SLASH, prototype, propertyName) ||
                Reflect.getMetadata(METADATA_KEYS.API_MODEL_PROPERTIES_SLASH, constructor, propertyName);
            const designType = Reflect.getMetadata('design:type', prototype, propertyName);
            if (!metadata && !designType)
                return;
            const meta = metadata || {};
            const propertySchema = {};
            // === Manejo de Enum ===
            if (meta.enum) {
                const enumValues = Array.isArray(meta.enum) ? meta.enum : Object.values(meta.enum);
                propertySchema.enum = enumValues;
                // Inferir tipo del enum
                const firstValue = enumValues[0];
                if (typeof firstValue === 'number')
                    propertySchema.type = 'number';
                else if (typeof firstValue === 'string')
                    propertySchema.type = 'string';
            }
            // === Manejo de Arrays ===
            if (meta.isArray || designType === Array) {
                propertySchema.type = 'array';
                const itemType = meta.type ||
                    (Array.isArray(meta.items) ? meta.items[0] : undefined) ||
                    (designType === Array ? Object : undefined);
                propertySchema.items = this.resolveType(itemType, visited);
                // Ejemplo para arrays
                if (meta.example !== undefined) {
                    propertySchema.example = Array.isArray(meta.example) ? meta.example : [meta.example];
                }
                else if (propertySchema.items.example !== undefined) {
                    propertySchema.example = [propertySchema.items.example];
                }
            }
            // === Propiedad normal ===
            else {
                const resolvedType = this.resolveType(meta.type || designType, visited);
                Object.assign(propertySchema, resolvedType);
                if (meta.example !== undefined) {
                    propertySchema.example = meta.example;
                }
            }
            // Otros metadatos comunes
            if (meta.description)
                propertySchema.description = meta.description;
            if (meta.default !== undefined)
                propertySchema.default = meta.default;
            schema.properties[propertyName] = propertySchema;
            // Generar ejemplo
            if (propertySchema.example !== undefined) {
                schema.example[propertyName] = propertySchema.example;
            }
            else if (!propertySchema.enum) {
                schema.example[propertyName] = this.getDefaultExample(propertySchema.type);
            }
            // Campo requerido
            if (meta.required === true) {
                required.push(propertyName);
            }
        });
        if (required.length > 0) {
            schema.required = required;
        }
        if (Object.keys(schema.example).length === 0) {
            delete schema.example;
        }
        if (Object.keys(schema.properties).length === 0) {
            return { type: 'object' };
        }
        return schema;
    }
    static getDefaultExample(type) {
        switch (type) {
            case 'string': return '';
            case 'number': return 0;
            case 'integer': return 0;
            case 'boolean': return false;
            case 'array': return [];
            case 'object': return {};
            default: return null;
        }
    }
    static resolveType(type, visited) {
        if (!type)
            return { type: 'object' };
        // Tipos primitivos
        if (type === String || type === 'string')
            return { type: 'string' };
        if (type === Number || type === 'number')
            return { type: 'number' };
        if (type === Boolean || type === 'boolean')
            return { type: 'boolean' };
        if (type === Date || type === 'Date')
            return { type: 'string', format: 'date-time' };
        if (type === BigInt)
            return { type: 'integer', format: 'int64' };
        // Clases personalizadas (recursivo)
        if (typeof type === 'function' && ![Object, Array, Promise].includes(type)) {
            const nestedSchema = this.generate(type, visited);
            if (Object.keys(nestedSchema.properties || {}).length > 0) {
                return nestedSchema;
            }
        }
        return { type: 'object' };
    }
}
exports.SchemaGenerator = SchemaGenerator;
//# sourceMappingURL=schema-generator.js.map