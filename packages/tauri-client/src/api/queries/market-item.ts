import { gql } from '@apollo/client';

export const GET_ITEM_MARKET_DATA_QUERY = gql`
query getItemMarketData($itemId: Int!) {
  getItemMarketData(itemID: $itemId) {
    itemID
    serversData {
      serverName
      currentPrice
      isHq
      quantity
      timestamps
      potentialProfit
    }
    userServer {
      serverName
      currentPrice
      isHq
      quantity
      timestamps
      hqBoughtPercentage
    }
    userSellOrders {
      pricePerUnit
      quantity
      total
      position
    }
    marketHelper {
      sellsFrequency {
        status
        historyLength
        salesVelocity
      }
      marketStability {
        status
        marketEvolution
      }
      marketSaturation {
        status
        sellOrdersLength
        uniqueSellers
      }
    }
  }
}
`;
