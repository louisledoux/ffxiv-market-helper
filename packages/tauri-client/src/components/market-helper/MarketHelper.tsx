import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '../common/Card';
import { Advisor } from './Advisor';

function MarketHelper() {
  return (
    <Card>
      <div>
        <Advisor />
        <div className="flex flex-row divide-x mt-3">
          <div className="w-2/3 pr-2">
            {/* TODO: move line 13 from 19 into a child component */}
            <div className="flex flex-col">
              <div>
                <FontAwesomeIcon className="text-xxs text-positive" icon={['fas', 'check-circle']} />
                <span className="ml-1 text-xs">Il est acheté fréquemment</span>
              </div>
              <span className="ml-3 text-small text-neutralGrey">(258 ordres d’achats en 24h)</span>
            </div>
            <div className="flex flex-col mt-2">
              <div>
                <FontAwesomeIcon className="text-xxs text-positive" icon={['fas', 'check-circle']} />
                <span className="ml-1 text-xs">Le cours du marché est stable</span>
              </div>
              <span className="ml-3 text-small text-neutralGrey">(Evolution du prix de 10% en 24h)</span>
            </div>
            <div className="flex flex-col mt-2">
              <div>
                <FontAwesomeIcon className="text-xxs text-positive" icon={['fas', 'check-circle']} />
                <span className="text-xs ml-1">Le marché n’est pas saturé</span>
              </div>
              <span className="ml-3 text-small text-neutralGrey">(3 vendeurs, 14 ordres de vente)</span>
            </div>
          </div>
          <div className="w-1/3 pl-2 flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="h-5">
                <span className="text-xs">Mon serveur</span>
              </div>
              <span className="text-xxs italic text-neutralGrey">(~20 min)</span>
              <span className="text-small mt-1 italic text-neutralGrey">2 000 000 gils</span>
              <span className="text-small italic text-neutralGrey">95% d’achats HQ</span>
            </div>
            <div className="flex flex-col">
              <div>
                <span className="text-xs">Mes ordres</span>
              </div>
              <span className="text-small italic text-neutralGrey">2 ordres de vente</span>
              <span className="text-small italic text-neutralGrey">pour 264 695 gils</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export { MarketHelper };
