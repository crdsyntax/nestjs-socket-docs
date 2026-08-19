export interface DiscoveredServer {
    baseUrl: string;
    port: number;
    jsonPath: string;
    gateways: number;
    latencyMs: number;
}
export interface DiscoveryResponse {
    servers: DiscoveredServer[];
    scannedPorts: number[];
    timestamp: number;
}
/**
 * Try server-side discovery first (via standalone server), fall back to client-side probing.
 */
export declare function discoverLocalServers(opts?: {
    baseUrl?: string;
    ports?: number[];
    useServerSide?: boolean;
}): Promise<DiscoveryResponse>;
