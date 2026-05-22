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
        };
        props.forEach((prop) => {
            const metadata = Reflect.getMetadata(constants_1.DECORATORS.API_MODEL_PROPERTIES, prototype, prop.slice(1));
            if (metadata) {
                schema.properties[prop.slice(1)] = {
                    type: this.mapType(metadata.type),
                    description: metadata.description,
                    example: metadata.example,
                    required: metadata.required,
                };
                if (metadata.required) {
                    schema.required.push(prop.slice(1));
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