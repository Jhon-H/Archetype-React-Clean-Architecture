import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { HttpAdapter, HttpResponse } from '@/domain/adapters/https-adapter';

export class AxiosAdapter implements HttpAdapter {
  private readonly axiosInstance: AxiosInstance;

  constructor(private readonly baseUrl: string) {
    const config: AxiosRequestConfig = {
      baseURL: this.baseUrl,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    this.axiosInstance = axios.create(config);
  }

  async get<T>(path: string): Promise<HttpResponse<T>> {
    try {
      const response = await this.axiosInstance.get<T>(path);
      return {
        code: response.status,
        data: response.data,
      };
    } catch (error) {
      throw new Error(`GET request failed: ${error}`);
    }
  }

  async post<T>(path: string, data: unknown): Promise<HttpResponse<T>> {
    try {
      const response = await this.axiosInstance.post<T>(path, data);
      return {
        code: response.status,
        data: response.data,
      };
    } catch (error) {
      throw new Error(`POST request failed: ${error}`);
    }
  }
}
