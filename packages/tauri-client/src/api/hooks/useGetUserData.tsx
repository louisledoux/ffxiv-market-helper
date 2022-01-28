import { QueryHookOptions, useQuery } from '@apollo/client';
import { getUserData } from '../types/getUserData';
import { GET_USER_DATA } from '../queries/user';

export type UseGetUserDataOptions = QueryHookOptions<getUserData, void>
export function useGetUserData(options: UseGetUserDataOptions = {}) {
  const { data, ...rest } = useQuery<getUserData, void>(GET_USER_DATA, {
    errorPolicy: 'ignore', // we don't want the app to crash because of that trivial query
    // instead it will just redirect to login
    ...options,
  });
  const isLoggedIn = Boolean(data?.getUserData.email);
  return {
    data, isLoggedIn, ...rest,
  };
}
