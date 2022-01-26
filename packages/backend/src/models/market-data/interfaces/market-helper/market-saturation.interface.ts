import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class MarketSaturation {
  @Field(() => Boolean)
  status: boolean;

  @Field(() => Int)
  sellOrdersLength: number;

  @Field(() => Int)
  uniqueSellers: number;
}
