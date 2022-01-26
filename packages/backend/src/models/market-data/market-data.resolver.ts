import {
  Args, Context, Resolver, Query, Int,
} from '@nestjs/graphql';
import { IContext } from '@utils/context/interface/context.interface';
import { MarketData } from './interfaces/market-data.interface';
import { MarketDataService } from './market-data.service';

@Resolver()
export class MarketDataResolver {
  constructor(
    private readonly marketDataService: MarketDataService,
  ) {}

  @Query(() => MarketData)
  async getItemMarketData(
    @Args('itemID', { type: () => Int }) itemID: number,
    @Context() context: IContext,
  ): Promise<MarketData> {
    return this.marketDataService.returnItemMarketData(itemID, context.userId);
  }
}
