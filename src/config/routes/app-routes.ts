import { Route } from '@/shared/types/route';

type RouteParamsMap = {
  HOME: void;
  DASHBOARD: void;
  LOGIN: void;
  POST: { id: string };
};

export const appRoutes: { [K in keyof RouteParamsMap]: Route<RouteParamsMap[K]> } = {
  HOME: {
    path: '/',
    getHref: () => '/',
  },
  DASHBOARD: {
    path: '/dashboard',
    getHref: () => '/dashboard',
  },
  POST: {
    path: '/post/:id',
    getHref: ({ id }) => `/post/${id}`,
  },
  LOGIN: {
    path: '/login',
    getHref: () => '/login',
  },
} as const;
