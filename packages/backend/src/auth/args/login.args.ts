import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class LoginArgs {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
