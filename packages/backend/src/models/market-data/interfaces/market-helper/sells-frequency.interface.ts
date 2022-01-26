import {
  Field, Float, Int, ObjectType,
} from '@nestjs/graphql';

@ObjectType()
export abstract class SellsFrequency {
  @Field(() => Boolean)
  status: boolean;

  @Field(() => Int)
  historyLength: number;

  @Field(() => Float, { nullable: true })
  salesVelocity?: number;
}
