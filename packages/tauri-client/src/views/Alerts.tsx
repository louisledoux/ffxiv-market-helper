import { AlertCard } from '../components/alert/AlertCard';
import { AlertHeader } from '../components/alert/AlertHeader';

const alert = {
  __typename: 'IAlert',
  id: '1',
  item_id: '36069',
  market_helper_activated: false,
  minimum_margin: 10,
  minimum_price: 200000,
  hqOnly: true,
};

function Alerts() {
  return (
    // TODO: move the margin div into the Layout component once the auth logic is done
    <div className="mt-8">
      <AlertHeader />
      <AlertCard alert={alert} />
      <AlertCard alert={alert} />
      <AlertCard alert={alert} />
    </div>
  );
}

export { Alerts };
