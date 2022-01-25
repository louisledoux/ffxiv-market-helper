import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(private readonly userDto: UserDto) {}

  async findByEmail(email: string): Promise<IUser> {
    const user = await this.userDto.oneByEmail({ email });
    // Error handled in the authService.ts validateUser method
    return user;
  }
}
