export interface HttpResponse<T> {
  code: number;
  data: T;
}

export interface HttpAdapter {
  get<T>(path: string): Promise<HttpResponse<T>>;
  post<T>(path: string, data: unknown): Promise<HttpResponse<T>>;
}
