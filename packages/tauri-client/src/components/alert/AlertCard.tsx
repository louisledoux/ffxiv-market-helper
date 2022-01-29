import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getUserData_getUserData_alerts } from '../../api/types/getUserData';
import { Card } from '../common/Card';
import { HqIcon } from '../icons/HqIcon';

type AlertCardProps = {
  alert: Omit<getUserData_getUserData_alerts, '__typename'>,
}

function AlertCard({
  alert,
}: AlertCardProps) {
  return (
    <Card>
      <>
        <div className="flex flex-row text-sm">
          <div>
            {alert.item_id}
          </div>
          {alert.hqOnly
            ? (
            // TODO: replace this SVG by a better one
              <HqIcon />
            ) : (
              ''
            )}
          <div className="flex-1 text-right text-primary">
            <FontAwesomeIcon icon={['fas', 'edit']} />
            <FontAwesomeIcon className="ml-2" icon={['fas', 'trash']} />
          </div>
        </div>
        <div className="flex flex-col text-xs italic mt-1.5">
          <span>
            Conditions d&apos;alertes :
          </span>
          <div className="flex flex-row justify-between mt-1">
            <div>
              <p className="text-neutralGrey">Market Helper</p>
              <p>
                {alert.market_helper_activated
                  ? (
                    <>
                      <FontAwesomeIcon className="text-positive" icon={['fas', 'check-circle']} />
                      <span className="ml-1">Activé</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon className="text-negative" icon={['fas', 'times-circle']} />
                      <span className="ml-1">Désactivé</span>
                    </>
                  )}
              </p>
            </div>
            <div>
              <p className="text-neutralGrey">Taux de marge min.</p>
              <p>
                {alert.minimum_margin
                  ? (
                    <span className="ml-1">
                      {alert.minimum_margin}
                      %
                    </span>
                  ) : (
                    <>
                      <FontAwesomeIcon className="text-negative" icon={['fas', 'times-circle']} />
                      <span className="ml-1">Désactivé</span>
                    </>
                  )}

              </p>
            </div>
            <div>
              <p className="text-neutralGrey">Prix min.</p>
              <p>
                {alert.minimum_price
                  ? (
                    <span className="ml-1">
                      {alert.minimum_price.toLocaleString()}
                      {' '}
                      gils
                    </span>
                  ) : (
                    <>
                      <FontAwesomeIcon className="text-negative" icon={['fas', 'times-circle']} />
                      <span className="ml-1">Désactivé</span>
                    </>
                  )}

              </p>
            </div>
          </div>
        </div>
      </>
    </Card>
  );
}

export { AlertCard };
