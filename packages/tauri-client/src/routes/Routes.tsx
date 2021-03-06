import { Route, Routes as Switch } from 'react-router-dom';
import { Alerts } from '../views/Alerts';
import { Layout } from '../containers/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RoutesEnum } from './Routes.enum';
import { UnauthenticatedRoute } from './UnauthenticatedRoute';
import { Login } from '../views/auth/Login';
import { Signup } from '../views/auth/Signup';
import { ResetPassword } from '../views/auth/ResetPassword';
import { ItemMarketData } from '../views/ItemMarketData';

function Routes() {
  return (
    <Switch>
      <Route path="" element={<PrivateRoute />}>
        <Route path="" element={<Layout />}>
          <Route path={RoutesEnum.ALERTS} element={<Alerts />} />
          <Route path={`${RoutesEnum.ITEM}/:itemID`} element={<ItemMarketData />} />
        </Route>
      </Route>

      <Route path="" element={<UnauthenticatedRoute />}>
        <Route path={RoutesEnum.LOGIN} element={<Login />} />
        <Route path={RoutesEnum.SIGNUP} element={<Signup />} />
        <Route path={RoutesEnum.RESET_PASSWORD} element={<ResetPassword />} />
      </Route>
    </Switch>
  );
}

export { Routes };
