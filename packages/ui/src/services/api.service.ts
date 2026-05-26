import axios, { AxiosInstance } from "axios";
import { SocketDocsData } from "../types";

export interface ApiConfig {
  baseUrl?: string;
  jsonPath?: string;
}

class ApiService {
  private instance: AxiosInstance;
  private jsonPath: string;

  constructor(config: ApiConfig = {}) {
    const baseUrl = config.baseUrl || window.location.origin;
    const jsonPath = config.jsonPath || "/socket-docs/json";
    
    this.instance = axios.create({
      baseURL: baseUrl,
      timeout: 10000, // 10 second timeout
    });
    this.jsonPath = jsonPath;
  }

  async fetchDocs(): Promise<SocketDocsData> {
    const { data } = await this.instance.get<SocketDocsData>(this.jsonPath);
    return data;
  }
}

export const createApiService = (config?: ApiConfig) => new ApiService(config);
