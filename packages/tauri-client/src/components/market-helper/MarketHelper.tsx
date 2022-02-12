import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getItemMarketData_getItemMarketData } from '../../api/types/getItemMarketData';
import { convertTimestamps } from '../../services/time';
import { Card } from '../common/Card';
import { Advisor } from './Advisor';

type IProps = {
  itemMarketData: getItemMarketData_getItemMarketData,
}
function MarketHelper({
  itemMarketData,
}: IProps) {
  const { marketHelper, userServer, userSellOrders } = itemMarketData;
  const userSellOrdersSum = _.sumBy(
    userSellOrders,
    (sellOrder) => sellOrder.pricePerUnit * sellOrder.quantity,
  );

  return (
    <Card>
      <div>
        <Advisor />
        <div className="flex flex-row divide-x mt-3">
          <div className="w-2/3 pr-2">
            <div className="flex flex-col">
              <div>
                <FontAwesomeIcon
                  className={`text-xxs ${marketHelper.sellsFrequency.status ? 'text-positive' : 'text-negative'}`}
                  icon={['fas', `${marketHelper.sellsFrequency.status ? 'check-circle' : 'times-circle'}`]}
                />
                <span className="ml-1 text-xs">
                  {marketHelper.sellsFrequency.status ? 'Il est acheté fréquemment' : "Il n'est pas acheté fréquemment"}
                </span>
              </div>
              <span className="ml-3 text-small text-neutralGrey">
                {`(${marketHelper.sellsFrequency.historyLength} ordres d’achats en 24h)`}
              </span>
            </div>
            <div className="flex flex-col mt-2">
              <div>
                <FontAwesomeIcon
                  className={`text-xxs ${marketHelper.marketStability.status ? 'text-positive' : 'text-negative'}`}
                  icon={['fas', `${marketHelper.marketStability.status ? 'check-circle' : 'times-circle'}`]}
                />
                <span className="ml-1 text-xs">
                  {marketHelper.marketStability.status ? 'Le cours du marché est stable' : 'Le cours du marché est instable'}
                </span>
              </div>
              <span className="ml-3 text-small text-neutralGrey">{`(Evolution du prix de ${marketHelper.marketStability.marketEvolution}% en 24h)`}</span>
            </div>
            <div className="flex flex-col mt-2">
              <div>
                <FontAwesomeIcon
                  className={`text-xxs ${marketHelper.marketSaturation.status ? 'text-positive' : 'text-negative'}`}
                  icon={['fas', `${marketHelper.marketSaturation.status ? 'check-circle' : 'times-circle'}`]}
                />
                <span className="text-xs ml-1">
                  {marketHelper.marketSaturation.status ? 'Le marché n’est pas saturé' : 'Le marché est saturé'}
                </span>
              </div>
              <span className="ml-3 text-small text-neutralGrey">
                {`(${marketHelper.marketSaturation.uniqueSellers} vendeurs, ${marketHelper.marketSaturation.sellOrdersLength} ordres de vente)`}
              </span>
            </div>
          </div>
          <div className="w-1/3 pl-2 flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="h-5">
                <span className="text-xs">Mon serveur</span>
              </div>
              <span className="text-xxs italic text-neutralGrey">{`(${convertTimestamps(userServer.timestamps)})`}</span>
              <span className="text-small mt-1 italic text-neutralGrey">{`${userServer.currentPrice.toLocaleString()} gils`}</span>
              <span className="text-small italic text-neutralGrey">{`${userServer.hqBoughtPercentage?.toFixed(0)}% d’achats HQ`}</span>
            </div>
            <div className="flex flex-col">
              <div>
                <span className="text-xs">Mes ordres</span>
              </div>
              <span className="text-small italic text-neutralGrey">{`${userSellOrders?.length} ordres de vente`}</span>
              <span className="text-small italic text-neutralGrey">{`pour ${userSellOrdersSum.toLocaleString()} gils`}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export { MarketHelper };
