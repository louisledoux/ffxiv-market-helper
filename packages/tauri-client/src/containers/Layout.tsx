import { Outlet } from 'react-router-dom';
import { Disclaimer } from '../components/common/Disclaimer';

function Layout() {
  return (
    <>
      <Outlet />
      <Disclaimer />
    </>
  );
}

export { Layout };
