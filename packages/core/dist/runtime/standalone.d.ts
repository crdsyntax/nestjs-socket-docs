import { SocketDocsSchema } from '../interfaces/schema.interface';
export interface StandaloneOptions {
    port?: number;
    jsonPath?: string;
}
/**
 * Standalone server for development purposes.
 * It serves the UI at the root and the JSON schema at /json.
 */
export declare class StandaloneServer {
    private schema;
    private server;
    private readonly port;
    private readonly jsonPath;
    constructor(schema: SocketDocsSchema, options?: StandaloneOptions);
    /**
     * Update the schema being served.
     */
    updateSchema(newSchema: SocketDocsSchema): void;
    start(): void;
    private getContentType;
    stop(): void;
}
//# sourceMappingURL=standalone.d.ts.map