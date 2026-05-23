export declare class SchemaGenerator {
    /**
     * Genera un JSON Schema a partir de una clase decorada con @ApiProperty() de NestJS/Swagger
     */
    static generate(target: any, visited?: Set<any>): any;
    private static getDefaultExample;
    private static resolveType;
}
//# sourceMappingURL=schema-generator.d.ts.map