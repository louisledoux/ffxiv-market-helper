import { Navigate, Outlet } from 'react-router-dom';
import { useGetUserData } from '../api/hooks/useGetUserData';
import { RoutesEnum } from './Routes.enum';

function PrivateRoute() {
  const { isLoggedIn, loading } = useGetUserData();
  if (loading) { return (<>Loading...</>); }
  return isLoggedIn ? <Outlet /> : <Navigate to={RoutesEnum.LOGIN} />;
}

export { PrivateRoute };
