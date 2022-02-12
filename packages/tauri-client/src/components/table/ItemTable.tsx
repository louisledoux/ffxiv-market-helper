import { getItemMarketData_getItemMarketData } from '../../api/types/getItemMarketData';
import { Card } from '../common/Card';
import { ItemRow } from './ItemRow';

type ItemTableProps = {
  itemMarketData: getItemMarketData_getItemMarketData,
}
function ItemTable({
  itemMarketData,
}: ItemTableProps) {
  const { serversData } = itemMarketData;
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
            {serversData?.map((serverData) => (
              <ItemRow
                key={serverData.serverName}
                serverData={serverData}
                userServer={itemMarketData?.userServer}
              />
            ))}
          </tbody>
        </table>

      </div>
    </Card>
  );
}

export { ItemTable };
