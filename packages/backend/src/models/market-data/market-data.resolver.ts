import { AuthGuard } from '@auth/guards/auth.guard';
import { UseGuards } from '@nestjs/common';
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
  @UseGuards(AuthGuard)
  async getItemMarketData(
    @Args('itemID', { type: () => Int }) itemID: number,
    @Context() context: IContext,
  ): Promise<MarketData> {
    console.log(context.userId);
    return this.marketDataService.returnItemMarketData(itemID, context.userId);
  }
}
