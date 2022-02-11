import { getItemMarketData_getItemMarketData_serversData, getItemMarketData_getItemMarketData_userServer } from '../../api/types/getItemMarketData';
import { convertTimestamps } from '../../services/time';
import { HqIcon } from '../icons/HqIcon';

type IProps = {
  serverData: getItemMarketData_getItemMarketData_serversData,
  userServer: getItemMarketData_getItemMarketData_userServer | undefined,
}
function ItemRow({
  serverData,
  userServer,
}: IProps) {
  const userServerPrice = userServer?.currentPrice || 0;
  const priceMarginPercentage = ((
    (userServerPrice - serverData.currentPrice) / serverData.currentPrice
  ) * 100);
  const evolutionIsNegative = (priceMarginPercentage < -0.009);
  const evolutionIsPositive = (priceMarginPercentage > 0.009);
  return (
    <tr>
      <td className="pt-4">
        <p>{serverData.serverName}</p>
        <p className="text-tiny text-neutralGrey">
          {`(${convertTimestamps(serverData.timestamps)})`}
        </p>
      </td>
      <td className="pt-4 align-top flex flex-row">
        <span>{(serverData.currentPrice).toLocaleString()}</span>
        {serverData.isHq ? <HqIcon /> : ''}
      </td>
      <td className="text-right pt-4 align-top">{serverData.quantity}</td>
      <td className="text-right pt-4">
        <p className={`font-bold ${serverData.potentialProfit < 0 ? 'text-neutralGrey' : ''}`}>
          {(serverData.potentialProfit).toLocaleString()}
        </p>
        <p className={`text-tiny font-bold ${evolutionIsPositive ? 'text-positive' : ''} ${evolutionIsNegative ? 'text-negative' : ''}`}>
          {`(${priceMarginPercentage.toFixed(0)}%)`}
        </p>
      </td>
    </tr>
  );
}

export { ItemRow };
