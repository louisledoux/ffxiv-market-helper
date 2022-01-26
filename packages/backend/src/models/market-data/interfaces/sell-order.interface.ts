import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class SellOrder {
  @Field(() => Int)
  pricePerUnit: number;

  @Field(() => Int)
  quantity: number;

  @Field(() => Int)
  total: number;

  @Field(() => Int)
  position: number;
}
