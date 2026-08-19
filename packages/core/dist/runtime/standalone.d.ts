import { SocketDocsSchema } from '../interfaces/schema.interface';
export interface StandaloneOptions {
    port?: number;
    jsonPath?: string;
    /**
     * Enable local server discovery. Default: true
     */
    discovery?: boolean;
    /**
     * Ports to scan when discovering local servers. Default: common dev ports
     */
    discoveryPorts?: number[];
}
export interface DiscoveredServer {
    baseUrl: string;
    port: number;
    jsonPath: string;
    gateways: number;
    latencyMs: number;
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
    private readonly uiDistPath;
    private readonly discoveryEnabled;
    private readonly discoveryPorts;
    constructor(schema: SocketDocsSchema, options?: StandaloneOptions);
    /**
     * Update the schema being served.
     */
    updateSchema(newSchema: SocketDocsSchema): void;
    /**
     * Sanitize and resolve a URL path to prevent path traversal attacks.
     * Returns null if the resolved path is outside the allowed directory.
     */
    private sanitizePath;
    /**
     * Probe a single port trying to fetch a valid SocketDocs schema.
     */
    private probePort;
    /**
     * Discover local servers by probing candidate ports concurrently.
     */
    discoverLocalServers(ports?: number[]): Promise<DiscoveredServer[]>;
    start(): void;
    private getContentType;
    /**
     * Stop the server gracefully.
     * Returns a promise that resolves when the server has closed.
     */
    stop(): Promise<void>;
    /**
     * Check if the server is currently running.
     */
    isRunning(): boolean;
    /**
     * Get the port the server is listening on.
     */
    getPort(): number;
}
//# sourceMappingURL=standalone.d.ts.map