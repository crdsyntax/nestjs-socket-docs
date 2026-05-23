const METADATA_KEYS = {
  API_MODEL_PROPERTIES: 'swagger:apiModelProperties',
  API_MODEL_PROPERTIES_ARRAY: 'swagger:apiModelPropertiesArray',
};

export class SchemaGenerator {
  static generate(target: any): any {
    if (!target) return { type: 'object' };
    
    const prototype = typeof target === 'function' ? target.prototype : target;
    const props = Reflect.getMetadata(METADATA_KEYS.API_MODEL_PROPERTIES_ARRAY, prototype) || [];
    
    const schema: any = {
      type: 'object',
      properties: {},
      required: [],
    };

    props.forEach((prop: string) => {
      const propertyName = prop.startsWith(':') ? prop.slice(1) : prop;
      const metadata = Reflect.getMetadata(METADATA_KEYS.API_MODEL_PROPERTIES, prototype, propertyName);
      
      if (metadata) {
        const propertySchema: any = {};
        
        if (metadata.enum) {
          propertySchema.enum = Array.isArray(metadata.enum) 
            ? metadata.enum 
            : Object.values(metadata.enum);
        }

        if (metadata.isArray) {
          propertySchema.type = 'array';
          const itemSchema = this.resolveType(metadata.type);
          propertySchema.items = itemSchema;
          if (itemSchema.example !== undefined && metadata.example === undefined) {
            propertySchema.example = [itemSchema.example];
          }
        } else {
          const typeSchema = this.resolveType(metadata.type);
          Object.assign(propertySchema, typeSchema);
        }

        if (metadata.description) propertySchema.description = metadata.description;
        if (metadata.example !== undefined) propertySchema.example = metadata.example;
        if (metadata.default !== undefined) propertySchema.default = metadata.default;

        schema.properties[propertyName] = propertySchema;
        
        // Build root example
        if (propertySchema.example !== undefined) {
          if (!schema.example) schema.example = {};
          schema.example[propertyName] = propertySchema.example;
        }

        if (metadata.required) {
          schema.required.push(propertyName);
        }
      }
    });

    if (schema.required.length === 0) delete schema.required;
    return schema;
  }

  private static resolveType(type: any): any {
    if (type === String) return { type: 'string' };
    if (type === Number) return { type: 'number' };
    if (type === Boolean) return { type: 'boolean' };
    if (type === Date) return { type: 'string', format: 'date-time' };
    
    if (typeof type === 'function' && type.prototype) {
      // Avoid infinite recursion if possible, but for now simple nested
      return this.generate(type);
    }
    
    return { type: 'object' };
  }
}
