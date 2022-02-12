import { useParams } from 'react-router-dom';
import { useGetItemMarketData } from '../api/hooks/useGetItemMarketData';
import { QueryResult } from '../components/common/QueryResult';
import { MarketHelper } from '../components/market-helper/MarketHelper';
import { SelectedItem } from '../components/navigation/SelectedItem';
import { ItemTable } from '../components/table/ItemTable';

function ItemMarketData() {
  const params = useParams();
  const itemID: number = parseFloat((params.itemID || ''));
  const { data, loading, error } = useGetItemMarketData({
    variables: {
      itemId: itemID,
    },
  });

  return (
    <QueryResult
      loading={loading}
      error={error}
      data={data}
    >
      <>
        <SelectedItem
          label="Résultat de la recherche"
          itemName={data?.getItemMarketData.itemName || ''}
        />
        <div className="mt-8">
          <div>
            {data && (
            <>
              <MarketHelper
                itemMarketData={data.getItemMarketData}
              />
              <ItemTable
                itemMarketData={data.getItemMarketData}
              />
            </>
            )}
          </div>
        </div>
      </>
    </QueryResult>
  );
}

export { ItemMarketData };
