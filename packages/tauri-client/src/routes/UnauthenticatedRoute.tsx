import { Navigate, Outlet } from 'react-router-dom';
import { useGetUserData } from '../api/hooks/useGetUserData';
import { RoutesEnum } from './Routes.enum';

function UnauthenticatedRoute() {
  const { isLoggedIn, loading } = useGetUserData();
  if (loading) { return (<>Loading...</>); }
  return isLoggedIn ? <Navigate to={RoutesEnum.LOGIN} /> : <Outlet />;
}

export { UnauthenticatedRoute };
