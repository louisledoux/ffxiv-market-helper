import { Args, Query, Resolver } from '@nestjs/graphql';
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
}
