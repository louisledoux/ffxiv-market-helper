import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MarketHelper } from './market-helper.interface';
import { SellOrder } from './sell-order.interface';
import { ServerData } from './server-data.interface';

@ObjectType()
export abstract class MarketData {
  @Field(() => Int)
  itemID: number;

  @Field(() => String)
  itemName: string;

  @Field(() => [ServerData])
  serversData: ServerData[];

  @Field(() => ServerData)
  userServer?: ServerData;

  @Field(() => [SellOrder], { nullable: true })
  userSellOrders?: SellOrder[];

  @Field(() => MarketHelper)
  marketHelper: MarketHelper;
}
