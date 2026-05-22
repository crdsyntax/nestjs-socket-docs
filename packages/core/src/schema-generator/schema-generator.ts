import { DECORATORS } from '@nestjs/swagger/dist/constants';

export class SchemaGenerator {
  static generate(prototype: any) {
    const props = Reflect.getMetadata(DECORATORS.API_MODEL_PROPERTIES_ARRAY, prototype) || [];
    const schema: any = {
      type: 'object',
      properties: {},
      required: [],
    };

    props.forEach((prop: string) => {
      const metadata = Reflect.getMetadata(DECORATORS.API_MODEL_PROPERTIES, prototype, prop.slice(1));
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

  private static mapType(type: any): string {
    if (type === String) return 'string';
    if (type === Number) return 'number';
    if (type === Boolean) return 'boolean';
    if (Array.isArray(type)) return 'array';
    return 'object';
  }
}
