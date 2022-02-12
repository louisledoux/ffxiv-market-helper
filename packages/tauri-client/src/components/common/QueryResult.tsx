import { ApolloError } from '@apollo/client';
import React from 'react';
import { LoadingSpinner } from '../icons/LoadingSpinner';

interface QueryResultProps {
  loading: boolean,
  error: ApolloError | undefined,
  data: any,
  children: React.ReactElement,
}

function QueryResult({
  loading, error, data, children,
}: QueryResultProps) {
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
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }
  if (!data) {
    return <>No data</>;
  }
  return children;
}

export { QueryResult };
