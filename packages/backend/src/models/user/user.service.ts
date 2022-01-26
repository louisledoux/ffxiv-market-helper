import { SignupArgs } from '@auth/args/signup.args';
import { HttpException, Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(private readonly userDto: UserDto) {}

  async createOneUser(args: SignupArgs): Promise<Omit<IUser, 'alerts'>> {
    const user = await this.userDto.createOne(args);
    return user;
  }

  async findByEmail(email: string): Promise<IUser> {
    const user = await this.userDto.oneByEmail({ email });
    // Error handled in the authService.ts validateUser method
    return user;
  }

  async findById(id: string): Promise<IUser> {
    const user = await this.userDto.oneById({ id });
    if (!user) {
      const error = { User: ' not found' };
      throw new HttpException({ error }, 401);
    }
    return user;
  }
}
