"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaGenerator = void 0;
const constants_1 = require("@nestjs/swagger/dist/constants");
class SchemaGenerator {
    static generate(prototype) {
        const props = Reflect.getMetadata(constants_1.DECORATORS.API_MODEL_PROPERTIES_ARRAY, prototype) || [];
        const schema = {
            type: 'object',
            properties: {},
            required: [],
            example: {}
        };
        props.forEach((prop) => {
            const propertyName = prop.startsWith(':') ? prop.slice(1) : prop;
            const metadata = Reflect.getMetadata(constants_1.DECORATORS.API_MODEL_PROPERTIES, prototype, propertyName);
            if (metadata) {
                schema.properties[propertyName] = {
                    type: this.mapType(metadata.type),
                    description: metadata.description,
                    example: metadata.example,
                    required: metadata.required,
                };
                if (metadata.example !== undefined) {
                    schema.example[propertyName] = metadata.example;
                }
                if (metadata.required) {
                    schema.required.push(propertyName);
                }
            }
        });
        return schema;
    }
    static mapType(type) {
        if (type === String)
            return 'string';
        if (type === Number)
            return 'number';
        if (type === Boolean)
            return 'boolean';
        if (Array.isArray(type))
            return 'array';
        return 'object';
    }
}
exports.SchemaGenerator = SchemaGenerator;
//# sourceMappingURL=schema-generator.js.map