import { Card } from '../common/Card';
import { ItemRow } from './ItemRow';

function ItemTable() {
  return (
    <Card>
      <table className="w-full text-xs table-auto">
        <thead className="test border-b mb-2">
          <tr>
            <th className="text-left pb-1">Serveur</th>
            <th className="text-left pb-1">Prix</th>
            <th className="text-right pb-1">Qté</th>
            <th className="text-right pb-1">Profit potentiel</th>
          </tr>
        </thead>
        <tbody>
          <ItemRow />
          <ItemRow />
          <ItemRow />
          <ItemRow />
          <ItemRow />
          <ItemRow />
          <ItemRow />
          <ItemRow />
          <ItemRow />
          <ItemRow />
          <ItemRow />
          <ItemRow />
        </tbody>
      </table>
    </Card>
  );
}

export { ItemTable };
