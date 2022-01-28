import { AuthGuard } from '@auth/guards/auth.guard';
import { UseGuards } from '@nestjs/common';
import {
  Args, Context, Query, Resolver,
} from '@nestjs/graphql';
import { IContext } from '@utils/context/interface/context.interface';
import { IUser } from './interfaces/user.interface';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Query(() => IUser)
  async getUserByEmail(
    @Args('email', { type: () => String }) email: string,
  ): Promise<IUser> {
    return this.userService.findByEmail(email);
  }

  @Query(() => IUser)
  @UseGuards(AuthGuard)
  async getUserData(
    @Context() context: IContext,
  ): Promise<IUser> {
    return this.userService.findById(context.userId);
  }
}
