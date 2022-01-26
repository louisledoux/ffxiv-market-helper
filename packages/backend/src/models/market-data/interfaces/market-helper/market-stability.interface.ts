import {
  Field, Float, Int, ObjectType,
} from '@nestjs/graphql';

@ObjectType()
export abstract class MarketStability {
  @Field(() => Boolean)
  status: boolean;

  @Field(() => Float)
  marketEvolution: number;

  @Field(() => Int, { nullable: true })
  highestPrice?: number;

  @Field(() => Int, { nullable: true })
  lowestPrice?: number;
}
