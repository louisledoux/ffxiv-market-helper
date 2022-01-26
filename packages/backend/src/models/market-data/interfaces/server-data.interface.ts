import {
  Field, Float, Int, ObjectType,
} from '@nestjs/graphql';

@ObjectType()
export abstract class ServerData {
  @Field(() => String)
  serverName: string;

  @Field(() => Int)
  currentPrice: number;

  @Field(() => Boolean)
  isHq: boolean;

  @Field(() => Int)
  quantity: number;

  @Field(() => Float)
  timestamps: number;

  @Field(() => Int)
  potentialProfit: number;

  @Field(() => Float, { nullable: true })
  hqBoughtPercentage?: number;
}
