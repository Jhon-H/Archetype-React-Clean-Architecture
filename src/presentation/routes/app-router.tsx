import { lazy, ReactNode, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { appRoutes } from '@/config/routes/app-routes';
import { GlobalErrorBoundary } from '@/presentation/app/GlobalErrorBoundary';
import NotFound from '@/presentation/app/NotFound';
import { AuthGuard } from '@/presentation/routes/AuthGuard';
import { UnAuthGuard } from '@/presentation/routes/UnAuthGuard';

const Dashboard = lazy(() => import('@/presentation/app/Dashboard/Dashboard'));
const Login = lazy(() => import('@/presentation/app/Login/Login'));
const Home = lazy(() => import('@/presentation/app/Home/Home'));
const Post = lazy(() => import('@/presentation/app/Post/Post'));

const lazyLoad = (Component: React.ComponentType, fallbackComponent?: ReactNode) => (
  <Suspense fallback={fallbackComponent ?? <div>Loading...</div>}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: appRoutes.HOME.path,
    errorElement: <GlobalErrorBoundary />,
    element: <Home />,
  },
  {
    path: appRoutes.LOGIN.path,
    element: <UnAuthGuard />,
    errorElement: <GlobalErrorBoundary />,
    children: [{ path: appRoutes.LOGIN.path, element: lazyLoad(Login) }],
  },
  {
    path: appRoutes.DASHBOARD.path,
    element: <AuthGuard />,
    errorElement: <GlobalErrorBoundary />,
    children: [{ path: appRoutes.DASHBOARD.path, element: lazyLoad(Dashboard) }],
  },
  {
    path: appRoutes.POST.path,
    element: <AuthGuard />,
    errorElement: <GlobalErrorBoundary />,
    children: [{ path: appRoutes.POST.path, element: lazyLoad(Post) }],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
