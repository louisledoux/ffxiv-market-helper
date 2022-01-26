import { UniversalisHistory } from '@models/universalis/interfaces/universalis-history.interface';
import { Listing, UniversalisItem } from '@models/universalis/interfaces/universalis-item.interface';
import { UniversalisService } from '@models/universalis/universalis.service';
import { IUser } from '@models/user/interfaces/user.interface';
import { UserService } from '@models/user/user.service';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { datacenters } from '@utils/ffxiv/datacenters';
import { MarketData } from './interfaces/market-data.interface';
import { SellOrder } from './interfaces/sell-order.interface';
import { ServerData } from './interfaces/server-data.interface';
import { MarketHelper } from './interfaces/market-helper.interface';

@Injectable()
export class MarketDataService {
  constructor(
    private readonly universalisService: UniversalisService,
    private readonly userService: UserService,
  ) {}

  /**
   * Retrieve Universalis market data
   * @param itemID The item's ID
   * @param userData The user data from the database
   * @returns The data subscriptions to unsubscribe from once the logic is done
   */
  async getUniversalisData(itemID: number, userData: IUser) {
    // Recover Universalis server data
    const serverDataObservable$ = await this
      .universalisService.fetchItemMarketData({
        itemID,
        serverOrDc: userData.server,
      });
    const userServerMarketData = (await firstValueFrom(serverDataObservable$)).data;

    // Recover Universalis datacenter data
    const datacenterDataObservable$ = await this
      .universalisService.fetchItemMarketData({
        itemID,
        serverOrDc: userData.datacenter,
      });
    const datacenterMarketData = (await firstValueFrom(datacenterDataObservable$)).data;

    // Recover Universalis item history data, shared across the component
    const historyObservable$ = await this
      .universalisService.fetchItemMarketHistory({
        itemID,
        serverOrDc: userData.datacenter,
      });
    const historyData = (await firstValueFrom(historyObservable$)).data;

    return {
      userServerMarketData,
      datacenterMarketData,
      historyData,
    };
  }

  /**
   * Orchestrator function that calls all functions needed to transform Universalis data
   * and send back properly-formatted data for the client
   * @param itemID The item's ID
   * @returns The formatted item market data
   */
  async returnItemMarketData(itemID: number, userId: string): Promise<MarketData> {
    // 1. Get user and Universalis data
    const userData = await this.userService.findById(userId);

    const {
      userServerMarketData,
      datacenterMarketData,
      historyData,
    } = await this.getUniversalisData(itemID, userData);

    // 2. Get user server data
    const userServerData = this.retrieveUserServerMarketData(
      historyData,
      userServerMarketData,
    );

    // 3. Get user sell orders for the following item
    const userSellOrders = this.retrieveUserSellOrders(
      userData,
      userServerMarketData,
    );

    // 4. Get datacenter servers data, except user server data
    const datacenterData = this.getDatacenterMarketData(
      userData,
      userServerData,
      datacenterMarketData,
    );

    // 5. Get Market Helper results from Universalis data
    // TODO
    const marketHelper: MarketHelper = {
      sellsFrequency: {
        status: true,
        historyLength: 10,
      },
      marketStability: {
        status: true,
        marketEvolution: 2,
      },
      marketSaturation: {
        status: true,
        sellOrdersLength: 10,
        uniqueSellers: 2,
      },
    };
    // 6. Return the final object
    return {
      itemID,
      serversData: datacenterData,
      userServer: userServerData,
      userSellOrders,
      marketHelper,
    };
  }

  retrieveUserServerMarketData(
    historyData: UniversalisHistory,
    serverData: UniversalisItem,
  ): ServerData {
    // Send the NQ or HQ item depending which kind is mostly bought
    // based on the last history entries
    let hqCount = 0;
    let isHq = false;
    let serverPriceToDisplay: Listing;
    for (const entry of historyData.entries) {
      if (entry.hq) hqCount += 1;
    }
    const hqBoughtPercentage = ((hqCount / historyData.entries.length) * 100);
    if (hqCount >= historyData.entries.length / 2) {
      isHq = true;
      serverPriceToDisplay = serverData.listings.find(({ hq }) => hq === true);
    } else {
      serverPriceToDisplay = serverData.listings.find(({ hq }) => hq === false);
    }
    return {
      serverName: serverData.worldName,
      currentPrice: serverPriceToDisplay.pricePerUnit,
      isHq,
      quantity: serverPriceToDisplay.quantity,
      timestamps: serverData.lastUploadTime,
      potentialProfit: 0,
      hqBoughtPercentage,
    };
  }

  retrieveUserSellOrders(userData: IUser, serverData: UniversalisItem): SellOrder[] {
    const userSellOrders: SellOrder[] = [];
    for (const [i, listing] of serverData.listings.entries()) {
      if (userData.retainers.includes(listing.retainerName)) {
        userSellOrders.push({
          pricePerUnit: listing.pricePerUnit,
          quantity: listing.quantity,
          total: listing.pricePerUnit * listing.quantity,
          position: i,
        });
      }
    }

    return userSellOrders;
  }

  getDatacenterMarketData(
    userData: IUser,
    userServerData: ServerData,
    datacenterMarketData: UniversalisItem,
  ): ServerData[] {
    const datacenter = datacenters[userData.datacenter]
      .filter((s) => s !== userData.server);

    const datacenterData: ServerData[] = [];
    for (const server of datacenter) {
      const serverMarketData = datacenterMarketData.listings.filter(
        ({ worldName }) => worldName === server,
      ).find(({ hq }) => hq === userServerData.isHq);

      // TODO: export profit calculation into another service, and include market taxes onto it
      // ! add a parameter to userData so potentialProfit is calculated based on the same quantity
      const potentialProfit = (userServerData.currentPrice * serverMarketData.quantity)
        - (serverMarketData.pricePerUnit * serverMarketData.quantity);
      datacenterData.push({
        serverName: serverMarketData.worldName,
        currentPrice: serverMarketData.pricePerUnit,
        isHq: serverMarketData.hq,
        quantity: serverMarketData.quantity,
        timestamps: serverMarketData.lastReviewTime,
        potentialProfit,
      });
    }
    return datacenterData;
  }

  // TODO
  calculateMarketHelper() {

  }
}
