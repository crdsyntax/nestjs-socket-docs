import { SocketDocsData } from "../types";
export interface ApiConfig {
    baseUrl?: string;
    jsonPath?: string;
}
declare class ApiService {
    private instance;
    private jsonPath;
    constructor(config?: ApiConfig);
    fetchDocs(): Promise<SocketDocsData>;
}
export declare const createApiService: (config?: ApiConfig) => ApiService;
export {};
