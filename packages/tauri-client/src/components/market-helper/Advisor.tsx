import { getItemMarketData_getItemMarketData_marketHelper } from '../../api/types/getItemMarketData';

type AdvisorProps = {
  marketHelper: getItemMarketData_getItemMarketData_marketHelper,
}
type AdvisorStatus = 'RISK' | 'INDIFFERENT' | 'OPPORTUNITY' | '';
function Advisor({
  marketHelper,
}: AdvisorProps) {
  let status: AdvisorStatus = '';
  if (
    !marketHelper.sellsFrequency.status
  ) status = 'RISK';
  if (
    (marketHelper.sellsFrequency.status
    && (marketHelper.marketStability.status || marketHelper.marketSaturation.status))
    || (marketHelper.sellsFrequency.status
    && !(marketHelper.marketStability.status && marketHelper.marketSaturation.status))
  ) status = 'INDIFFERENT';
  if (
    marketHelper.marketSaturation.status
    && marketHelper.marketStability.status
    && marketHelper.marketSaturation.status
  ) status = 'OPPORTUNITY';

  return (
    <>
      {status === 'RISK' && (
        <div className="bg-negative rounded text-xxs px-2 py-1.5 mt-1">
          Ce produit est risqué pour des opérations de marché.
        </div>
      )}
      {status === 'INDIFFERENT' && (
        <div className="bg-neutralGrey rounded text-xxs px-2 py-1.5 mt-1">
          Ce produit est banal pour des opérations de marché.
        </div>
      )}
      {status === 'OPPORTUNITY' && (
        <div className="bg-positive rounded text-xxs px-2 py-1.5 mt-1">
          Ce produit est intéressant pour des opérations de marché.
        </div>
      )}
    </>
  );
}

export { Advisor };
