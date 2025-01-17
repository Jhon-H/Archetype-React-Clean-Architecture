import { Navigate, Outlet } from 'react-router';
import { appRoutes } from '@/config/routes/app-routes';
import { useAuth } from '@/presentation/hooks/use-auth';

interface Props {
  redirectTo?: string;
}

export const AuthGuard = ({ redirectTo = appRoutes.HOME.getHref() }: Props) => {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />;
};
