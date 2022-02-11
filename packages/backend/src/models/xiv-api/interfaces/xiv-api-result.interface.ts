import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemSearchCategory } from './xiv-api-item-search-category.interface';

@ObjectType()
export abstract class Result {
  @Field(() => Int)
  ID: number;

  @Field(() => String)
  IconHD: string;

  ItemSearchCategory: ItemSearchCategory;

  @Field(() => Int)
  LevelItem: number;

  @Field(() => String)
  Name_de: string;

  @Field(() => String)
  Name_en: string;

  @Field(() => String)
  Name_fr: string;

  @Field(() => String)
  Name_ja: string;
}
