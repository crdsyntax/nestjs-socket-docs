"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaGenerator = void 0;
const METADATA_KEYS = {
    API_MODEL_PROPERTIES: 'swagger:apiModelProperties',
    API_MODEL_PROPERTIES_ARRAY: 'swagger:apiModelPropertiesArray',
};
class SchemaGenerator {
    static generate(target) {
        if (!target)
            return { type: 'object' };
        const prototype = typeof target === 'function' ? target.prototype : target;
        const props = Reflect.getMetadata(METADATA_KEYS.API_MODEL_PROPERTIES_ARRAY, prototype) || [];
        const schema = {
            type: 'object',
            properties: {},
            required: [],
        };
        props.forEach((prop) => {
            const propertyName = prop.startsWith(':') ? prop.slice(1) : prop;
            const metadata = Reflect.getMetadata(METADATA_KEYS.API_MODEL_PROPERTIES, prototype, propertyName);
            if (metadata) {
                const propertySchema = {};
                if (metadata.enum) {
                    propertySchema.enum = Array.isArray(metadata.enum)
                        ? metadata.enum
                        : Object.values(metadata.enum);
                }
                if (metadata.isArray) {
                    propertySchema.type = 'array';
                    propertySchema.items = this.resolveType(metadata.type);
                }
                else {
                    Object.assign(propertySchema, this.resolveType(metadata.type));
                }
                if (metadata.description)
                    propertySchema.description = metadata.description;
                if (metadata.example !== undefined)
                    propertySchema.example = metadata.example;
                if (metadata.default !== undefined)
                    propertySchema.default = metadata.default;
                schema.properties[propertyName] = propertySchema;
                if (metadata.required) {
                    schema.required.push(propertyName);
                }
            }
        });
        if (schema.required.length === 0)
            delete schema.required;
        return schema;
    }
    static resolveType(type) {
        if (type === String)
            return { type: 'string' };
        if (type === Number)
            return { type: 'number' };
        if (type === Boolean)
            return { type: 'boolean' };
        if (type === Date)
            return { type: 'string', format: 'date-time' };
        if (typeof type === 'function' && type.prototype) {
            // Avoid infinite recursion if possible, but for now simple nested
            return this.generate(type);
        }
        return { type: 'object' };
    }
}
exports.SchemaGenerator = SchemaGenerator;
//# sourceMappingURL=schema-generator.js.map