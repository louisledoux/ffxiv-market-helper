import { ArgsType, Field } from '@nestjs/graphql';
import { IDatacenter } from '@utils/ffxiv/datacenter.enum';

@ArgsType()
export class SignupArgs {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  pseudo: string;

  @Field(() => String)
  datacenter: IDatacenter;

  @Field(() => String)
  server: string;
}
