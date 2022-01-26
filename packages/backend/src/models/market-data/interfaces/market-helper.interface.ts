import { Field, ObjectType } from '@nestjs/graphql';
import { MarketSaturation } from './market-helper/market-saturation.interface';
import { MarketStability } from './market-helper/market-stability.interface';
import { SellsFrequency } from './market-helper/sells-frequency.interface';

@ObjectType()
export abstract class MarketHelper {
  @Field(() => SellsFrequency)
  sellsFrequency: SellsFrequency;

  @Field(() => MarketStability)
  marketStability: MarketStability;

  @Field(() => MarketSaturation)
  marketSaturation: MarketSaturation;
}
