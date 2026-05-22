export interface SocketDocsConfig {
    path?: string;
    playground?: boolean;
    gateways?: {
        autoDiscover?: boolean;
    };
    export?: {
        enabled?: boolean;
        path?: string;
    };
}
export declare const defineSocketDocsConfig: (config: SocketDocsConfig) => SocketDocsConfig;
