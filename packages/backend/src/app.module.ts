// GraphQL imports
import { UserModule } from '@models/user/user.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlService } from './config/graphql/graphql.service';

// Models imports

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlService,
    }),
    UserModule,
  ],
})
export class AppModule {}
