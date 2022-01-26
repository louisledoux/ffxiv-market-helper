import { UserModule } from '@models/user/user.module';
import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [UserModule],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
