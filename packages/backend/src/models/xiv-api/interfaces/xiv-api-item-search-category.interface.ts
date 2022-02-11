import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class ItemSearchCategory {
  @Field(() => String)
  Name_de: string;

  @Field(() => String)
  Name_en: string;

  @Field(() => String)
  Name_fr: string;

  @Field(() => String)
  Name_ja: string;
}
