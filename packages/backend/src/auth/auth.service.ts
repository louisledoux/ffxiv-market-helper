import { IUser } from '@models/user/interfaces/user.interface';
import { UserService } from '@models/user/user.service';
import { Injectable, Logger } from '@nestjs/common';
import { COOKIE_SETTINGS, createToken } from '@utils/auth/auth-utils';
import { IContext } from '@utils/context/interface/context.interface';
import { comparePassword, hashPassword } from '@utils/password/bcrypt';
import { UserInputError } from 'apollo-server-errors';
import { LoginArgs } from './args/login.args';
import { SignupArgs } from './args/signup.args';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
  ) {}

  async validateUser(args: LoginArgs, context: IContext): Promise<Omit<IUser, 'password'>> {
    const user = await this.userService.findByEmail(args.email);
    const valid = await comparePassword(args.password, user.password || '');
    if (!user || !valid) {
      Logger.warn('Incorrect email or password');
      throw new UserInputError('Incorrect email or password');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...res } = user;
    const token = createToken(res);
    context.res.cookie('ffxiv_market_helper_session', token, COOKIE_SETTINGS);
    return res;
  }

  async signup(args: SignupArgs, context: IContext): Promise<Omit<IUser, 'alerts' | 'password'>> {
    const password = await hashPassword(args.password);
    const user = await this.userService.createOneUser({
      ...args,
      password,
    });
    const token = createToken(user);
    context.res.cookie('ffxiv_market_helper_session', token, COOKIE_SETTINGS);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: dbPassword, ...rest } = user;
    return rest;
  }

  async logout(context: IContext): Promise<boolean> {
    context.res.clearCookie('ffxiv_market_helper_session', COOKIE_SETTINGS);
    Logger.verbose('Logout successful');
    return true;
  }
}
