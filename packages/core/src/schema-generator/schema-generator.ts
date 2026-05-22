import { DECORATORS } from '@nestjs/swagger/dist/constants';

export class SchemaGenerator {
  static generate(prototype: any) {
    const props = Reflect.getMetadata(DECORATORS.API_MODEL_PROPERTIES_ARRAY, prototype) || [];
    const schema: any = {
      type: 'object',
      properties: {},
      required: [],
      example: {}
    };

    props.forEach((prop: string) => {
      const propertyName = prop.startsWith(':') ? prop.slice(1) : prop;
      const metadata = Reflect.getMetadata(DECORATORS.API_MODEL_PROPERTIES, prototype, propertyName);
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

  private static mapType(type: any): string {
    if (type === String) return 'string';
    if (type === Number) return 'number';
    if (type === Boolean) return 'boolean';
    if (Array.isArray(type)) return 'array';
    return 'object';
  }
}
