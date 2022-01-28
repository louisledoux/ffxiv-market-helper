import { MutationHookOptions, useApolloClient, useMutation } from '@apollo/client';
import { LOGOUT_MUTATION } from '../mutations/logout';
import { GET_USER_DATA } from '../queries/user';
import { LogoutMutation } from '../types/LogoutMutation';

export type UseLogoutOptions = MutationHookOptions<LogoutMutation, void>;

export function useLogout(logoutOptions: UseLogoutOptions = {}) {
  const apolloClient = useApolloClient();
  return useMutation<LogoutMutation, void>(LOGOUT_MUTATION, {
    update(cache) {
      cache.writeQuery({
        query: GET_USER_DATA,
        data: {
          self: null,
        },
      });
      apolloClient.resetStore();
    },
    ...logoutOptions,
  });
}
