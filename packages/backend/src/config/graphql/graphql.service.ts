import {
  END_POINT, GRAPHQL_DEPTH_LIMIT,
} from '@environments/application';
import { Injectable, Logger } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { appContext } from '@utils/context/context';
import * as depthLimit from 'graphql-depth-limit';

@Injectable()
export class GraphqlService implements GqlOptionsFactory {
  constructor() {}

  async createGqlOptions(): Promise<GqlModuleOptions> {
    return {
      autoSchemaFile: true,
      path: `/${END_POINT!}`,
      context: appContext,
      // import schemaDirectives here if needed
      // import directive resolvers here if needed
      validationRules: [
        depthLimit(
          GRAPHQL_DEPTH_LIMIT,
          {},
          (depths) => {
            if (depths[''] === GRAPHQL_DEPTH_LIMIT - 1) {
              Logger.warn('You can only descend one more GQL level', 'GraphQL', false);
            }
          },
        ),
      ],
      formatError: (error) => ({
        message: error.message,
        code: error.extensions && error.extensions.code,
        locations: error.locations,
        path: error.path,
      }),
      playground: false,
      // * Add subscriptions options here if needed
    };
  }
}
