import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes/Routes';
import './assets/FontAwesome';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-screen flex flex-row items-start bg-lightBackground text-white">
        <div className="flex-auto mx-6">
          <Routes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
