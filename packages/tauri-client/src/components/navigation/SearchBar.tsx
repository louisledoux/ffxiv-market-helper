import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { GET_XIVAPI_SEARCH_RESULTS_QUERY } from '../../api/queries/xiv-api';
import { getXivApiSearchResults, getXivApiSearchResultsVariables } from '../../api/types/getXivApiSearchResults';
import { KofiIcon } from '../icons/KofiIcon';
import { SettingsIcon } from '../icons/SettingsIcon';
import { Input } from '../inputs/Input';
import { SearchResults } from './SearchResults';

function SearchBar() {
  const { handleSubmit, register } = useForm();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isDisplayed, setIsDisplayed] = useState<boolean>(false);
  const [fetchXivData, { data, loading }] = useLazyQuery<
    getXivApiSearchResults
  >(GET_XIVAPI_SEARCH_RESULTS_QUERY, {
    variables: {
      query: searchQuery,
    },
    // ? For unknown reason, no-cache policy is needed here to prevent an app crash
    // ? To be investigated later on
    fetchPolicy: 'no-cache',
  });

  const searchResults = (queryData: { [x: string]: string; }) => {
    setSearchQuery(queryData.query);
    setIsDisplayed(true);
    fetchXivData();
  };

  return (
    <div className="relative">
      <div className="flex flex-row justify-between gap-5 mt-7">
        <form
          className="flex-1"
          onSubmit={handleSubmit(searchResults)}
        >
          <Input
            label="Rechercher"
            placeholder="Rechercher un produit"
            register={register}
            name="query"
            type="text"
            required={false}
            id="query"
            search
          />
        </form>
        <KofiIcon />
        <SettingsIcon />
      </div>
      {isDisplayed && (
        <SearchResults
          loading={loading}
          searchResults={data?.getXivApiSearchResults.Results}
          setIsDisplayed={setIsDisplayed}
        />
      )}
    </div>
  );
}

export { SearchBar };
