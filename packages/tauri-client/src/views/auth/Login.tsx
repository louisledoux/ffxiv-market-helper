import { Disclaimer } from '../../components/common/Disclaimer';
import { MarketHelper } from '../../components/market-helper/MarketHelper';
import { Navbar } from '../../components/navigation/Navbar';
import { ItemTable } from '../../components/table/ItemTable';

function Login() {
  return (
    <>
      <Navbar />
      <MarketHelper />
      <ItemTable />
      <Disclaimer />
    </>
  );
}

export { Login };
