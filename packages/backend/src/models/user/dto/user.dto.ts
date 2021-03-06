import { SignupArgs } from '@auth/args/signup.args';
import { Injectable } from '@nestjs/common';
import { Alert, Prisma, User } from '@prisma/client';
import { PrismaService } from '../../../prisma.service';

interface UserWithAlerts extends User {
  alerts: Alert[];
}

@Injectable()
export class UserDto {
  constructor(private prisma: PrismaService) {}

  async createOne(args: SignupArgs): Promise<User> {
    return this.prisma.user.create({
      data: {
        ...args,
      },
    });
  }

  async oneByEmail(
    email: Prisma.UserWhereUniqueInput,
  ): Promise<UserWithAlerts | null> {
    return this.prisma.user.findUnique({
      where: email,
      include: {
        alerts: true,
      },
    });
  }

  async oneById(
    id: Prisma.UserWhereUniqueInput,
  ): Promise<UserWithAlerts | null> {
    return this.prisma.user.findUnique({
      where: id,
      include: {
        alerts: true,
      },
    });
  }
}
