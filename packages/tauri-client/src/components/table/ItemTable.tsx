import { Card } from '../common/Card';
import { ItemRow } from './ItemRow';

function ItemTable() {
  return (
    <Card>
      <div className="h-72 pr-2 scrollbar overflow-auto">
        <table className="w-full text-xs table-auto">
          <thead className="sticky top-0 bg-darkBackground border-b mb-2">
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

      </div>
    </Card>
  );
}

export { ItemTable };
