import { useParams } from 'react-router-dom';
import { useGetItemMarketData } from '../api/hooks/useGetItemMarketData';
import { QueryResult } from '../components/common/QueryResult';
import { MarketHelper } from '../components/market-helper/MarketHelper';
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
    </QueryResult>
  );
}

export { ItemMarketData };
