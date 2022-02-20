import { MutationHookOptions, useMutation } from '@apollo/client';
import { SIGNUP_MUTATION } from '../mutations/signup';
import { GET_USER_DATA } from '../queries/user';
import { SignupMutation, SignupMutationVariables } from '../types/SignupMutation';

export type UseSignupOptions = MutationHookOptions<SignupMutation, SignupMutationVariables>;

export function useSignup(signupOptions: UseSignupOptions = {}) {
  return useMutation<SignupMutation, SignupMutationVariables>(SIGNUP_MUTATION, {
    update(cache, { data }) {
      cache.writeQuery({
        query: GET_USER_DATA,
        data: {
          getUserData: {
            ...data?.signup,
          },
        },
      });
    },
    ...signupOptions,
  });
}
