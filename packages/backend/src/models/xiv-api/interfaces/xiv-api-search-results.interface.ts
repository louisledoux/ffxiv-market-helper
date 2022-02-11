import { Field, ObjectType } from '@nestjs/graphql';
import { Result } from './xiv-api-result.interface';

@ObjectType()
export abstract class XivApiSearchResults {
  @Field(() => [Result])
  Results: Result[]
}
