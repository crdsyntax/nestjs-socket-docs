import { JsonSchema } from '../interfaces/schema.interface';
export interface SwaggerMetadata {
    enum?: unknown[] | Record<string, unknown>;
    isArray?: boolean;
    items?: unknown[];
    type?: unknown;
    example?: unknown;
    description?: string;
    default?: unknown;
    required?: boolean;
}
export declare class SchemaGenerator {
    /**
     * Genera un JSON Schema a partir de una clase decorada con @ApiProperty() de NestJS/Swagger
     */
    static generate(target: unknown, visited?: Set<unknown>): JsonSchema;
    private static getDefaultExample;
    private static resolveType;
}
//# sourceMappingURL=schema-generator.d.ts.map