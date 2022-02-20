import { Injectable } from '@nestjs/common';
import { UniversalisHistory } from '@models/universalis/interfaces/universalis-history.interface';
import { UniversalisItem } from '@models/universalis/interfaces/universalis-item.interface';
import { MarketSaturation } from './interfaces/market-helper/market-saturation.interface';
import { MarketStability } from './interfaces/market-helper/market-stability.interface';
import { SellsFrequency } from './interfaces/market-helper/sells-frequency.interface';
import { ServerData } from './interfaces/server-data.interface';

@Injectable()
export class MarketHelperService {
  constructor() {}

  /**
   * Check the sells frequency of an item based on the last 24h sells history
   * The function sends a green status if there's at least one sell per hour
   * @param historyData The history entries
   * @returns sellsFrequency The sellsFrequency status with its data
   */
  checkSellsFrequency(historyData: UniversalisHistory): SellsFrequency {
    // ? We don't need to filter entries here, as the query send us
    // ? only entries from the last 24 hours
    const historyLength = historyData.entries.length;
    // If we don't have at least one item sold per hour, then we send a status = false;
    const sellsFrequency = historyLength / 24;
    if (sellsFrequency > 1) {
      return {
        status: true,
        historyLength,
      };
    }
    return {
      status: false,
      historyLength,
    };
  }

  checkMarketStability(
    userServerData: ServerData,
    historyData: UniversalisHistory,
  ): MarketStability {
    // What we want to check here is, we need to do a median of all values
    let historyTotalPricePerUnitValue: number = 0;
    for (const entry of historyData.entries) {
      historyTotalPricePerUnitValue += entry.pricePerUnit;
    }
    const historyPriceMedian = historyTotalPricePerUnitValue / (historyData.entries.length || 1);
    const { currentPrice } = userServerData;
    const priceDiff = historyPriceMedian - currentPrice;
    const marketEvolution = Number(((priceDiff / currentPrice) * 100).toFixed(2));
    // If we have a 10% loss evolution in the last 24 hours, we send a status = false
    if (marketEvolution < -10) {
      return {
        status: false,
        marketEvolution,
      };
    }
    return {
      status: true,
      marketEvolution,
    };
  }

  checkMarketSaturation(userServerMarketData: UniversalisItem): MarketSaturation {
    // Here, we need to recover all unique retainers name, and stack them in an array
    const retainers: string[] = [];
    for (const listing of userServerMarketData.listings) {
      retainers.push(listing.retainerName);
    }
    const sellOrdersLength = userServerMarketData.listings.length;
    const uniqueRetainers = [...new Set(retainers)];
    const uniqueSellers = uniqueRetainers.length;
    if (uniqueSellers > 10) {
      return {
        status: false,
        sellOrdersLength,
        uniqueSellers,
      };
    }
    return {
      status: true,
      sellOrdersLength,
      uniqueSellers,
    };
  }
}
