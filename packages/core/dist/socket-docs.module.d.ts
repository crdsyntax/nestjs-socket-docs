import { INestApplication, INestApplicationContext } from "@nestjs/common";
import { StandaloneServer, StandaloneOptions } from "./runtime/standalone";
import { SocketDocsSchema } from "./interfaces/schema.interface";
export interface NestContainer {
    getModules(): Map<string, NestModule>;
}
export interface NestModule {
    providers: Map<string, NestProviderWrapper>;
}
export interface NestProviderWrapper {
    instance: object | null;
}
export interface RequestWithParams {
    params: {
        file: string;
    };
}
export declare class SocketDocsModule {
    /**
     * Start a standalone development server.
     * Useful for testing the UI with a specific schema.
     */
    static dev(schema: SocketDocsSchema, options?: StandaloneOptions): Promise<StandaloneServer>;
    static setup(app: INestApplication | INestApplicationContext): Promise<void>;
    private static createExplorer;
    private static logDiscovery;
    private static registerRoutes;
}
//# sourceMappingURL=socket-docs.module.d.ts.map