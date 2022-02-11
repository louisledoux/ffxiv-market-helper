import { Outlet } from 'react-router-dom';
import { Disclaimer } from '../components/common/Disclaimer';
import { Navbar } from '../components/navigation/Navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <div className="mt-8">
        <Outlet />
      </div>
      <Disclaimer />
    </>
  );
}

export { Layout };
