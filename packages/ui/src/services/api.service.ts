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
    this.instance = axios.create({
      baseURL: config.baseUrl || window.location.origin,
    });
    this.jsonPath = config.jsonPath || "/socket-docs/json";
  }

  async fetchDocs(): Promise<SocketDocsData> {
    const { data } = await this.instance.get<SocketDocsData>(this.jsonPath);
    return data;
  }
}

export const createApiService = (config?: ApiConfig) => new ApiService(config);
