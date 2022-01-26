import { IUser } from '@models/user/interfaces/user.interface';
import { Logger } from '@nestjs/common';
import {
  Args, Context, Mutation, Resolver,
} from '@nestjs/graphql';
import { IContext } from '@utils/context/interface/context.interface';
import { LoginArgs } from './args/login.args';
import { SignupArgs } from './args/signup.args';
import { AuthService } from './auth.service';

@Resolver(() => IUser)
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Mutation(() => IUser)
  async login(
    @Args() args: LoginArgs,
    @Context() context: IContext,
  ): Promise<Omit<IUser, 'password'> | null> {
    const email = args.email.toLocaleLowerCase().trim();
    Logger.verbose(`Trying to authenticate user, ${email}`);
    const user = await this.authService.validateUser(
      {
        email,
        password: args.password,
      },
      context,
    );
    Logger.verbose(`Authentication success, ${email} `);
    return user;
  }

  @Mutation(() => IUser)
  async signup(
    @Args() args: SignupArgs,
    @Context() context: IContext,
  ): Promise<Omit<IUser, 'alerts' | 'password'>> {
    Logger.verbose('Trying to signup user', args.email);
    const email = args.email.toLowerCase().trim();
    const user = await this.authService.signup({
      ...args,
      email,
    }, context);
    Logger.verbose(`User successfully created, ${email}`);
    return user;
  }

  @Mutation(() => Boolean)
  async logout(
    @Context() context: IContext,
  ): Promise<boolean> {
    Logger.verbose('Trying to logout user');
    const logout = await this.authService.logout(context);
    return logout;
  }
}
