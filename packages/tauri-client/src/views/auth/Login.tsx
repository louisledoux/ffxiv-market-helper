import { AlertHeader } from '../../components/alert/AlertHeader';
import { Navbar } from '../../components/navigation/Navbar';

function Login() {
  return (
    <>
      <Navbar />
      <div className="mt-10">
        <AlertHeader />
      </div>
    </>
  );
}

export { Login };
