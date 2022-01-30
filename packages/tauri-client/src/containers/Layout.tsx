import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navigation/Navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <div className="mt-8">
        <Outlet />
      </div>
    </>
  );
}

export { Layout };
