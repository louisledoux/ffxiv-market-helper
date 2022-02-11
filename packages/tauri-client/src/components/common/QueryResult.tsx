import { ApolloError } from '@apollo/client';
import React from 'react';

interface IProps {
  loading: boolean,
  error: ApolloError | undefined,
  data: any,
  children: React.ReactElement,
}

function QueryResult({
  loading, error, data, children,
}: IProps) {
  console.log(data);
  if (error) {
    return (
      <p>
        ERROR:
        {' '}
        {error.message}
      </p>
    );
  }
  if (loading) {
    return <>Loading...</>;
  }
  if (!data) {
    return <>No data</>;
  }
  return children;
}

export { QueryResult };
