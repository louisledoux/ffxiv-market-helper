import { MutationHookOptions, useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../mutations/login';
import { LoginMutation, LoginMutationVariables } from '../types/LoginMutation';
import { GET_USER_DATA } from '../queries/user';

export type UseLoginOptions = MutationHookOptions<LoginMutation, LoginMutationVariables>;

export function useLogin(loginOptions: UseLoginOptions = {}) {
  return useMutation<LoginMutation, LoginMutationVariables>(LOGIN_MUTATION, {
    update(cache, { data }) {
      cache.writeQuery({
        query: GET_USER_DATA,
        data: {
          getUserData: {
            ...data?.login,
          },
        },
      });
    },
    ...loginOptions,
  });
}
