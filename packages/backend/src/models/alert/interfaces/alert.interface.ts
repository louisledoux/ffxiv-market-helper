import {
  Field, ID, Int, ObjectType,
} from '@nestjs/graphql';

@ObjectType()
export abstract class IAlert {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  item_id: string;

  @Field(() => Boolean)
  market_helper_activated: boolean;

  @Field(() => Int, { nullable: true })
  minimum_margin?: number;

  @Field(() => Int, { nullable: true })
  minimum_price?: number;

  @Field(() => Boolean)
  hqOnly: boolean;

  @Field(() => String)
  userId: string;
}
