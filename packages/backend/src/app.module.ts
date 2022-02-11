// GraphQL imports
import { AuthModule } from '@auth/auth.module';
import { RATE_LIMIT_MAX } from '@environments/application';
import { MarketDataModule } from '@models/market-data/market-data.module';
import { UserModule } from '@models/user/user.module';
import { XivApiModule } from '@models/xiv-api/xiv-api.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ThrottlerModule } from '@nestjs/throttler';
import { GraphqlService } from './config/graphql/graphql.service';

// Models imports

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlService,
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: RATE_LIMIT_MAX,
    }),
    UserModule,
    AuthModule,
    XivApiModule,
    MarketDataModule,
  ],
})
export class AppModule {}
