import {
  Field, ID, ObjectType,
} from '@nestjs/graphql';
import { IAlert } from '@models/alert/interfaces/alert.interface';
import { IDatacenter } from '@utils/ffxiv/datacenter.enum';

@ObjectType()
export abstract class IUser {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  pseudo: string;

  @Field(() => String, { nullable: true })
  avatar?: string;

  @Field(() => String)
  datacenter: IDatacenter;

  @Field(() => String)
  server: string;

  @Field(() => [IAlert])
  alerts: IAlert[];

  @Field(() => [String])
  retainers: string[];
}
