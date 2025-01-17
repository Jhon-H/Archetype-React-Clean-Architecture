export type Route<TParams> = {
  path: string;
  getHref: TParams extends never ? () => string : (params: TParams) => string;
};
