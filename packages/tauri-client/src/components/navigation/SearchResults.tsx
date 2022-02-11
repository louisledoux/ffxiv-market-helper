import React from 'react';
import { Link } from 'react-router-dom';
import { getXivApiSearchResults_getXivApiSearchResults_Results } from '../../api/types/getXivApiSearchResults';
import { RoutesEnum } from '../../routes/Routes.enum';
import { Card } from '../common/Card';

interface IProps {
  loading: boolean,
  searchResults: getXivApiSearchResults_getXivApiSearchResults_Results[] | undefined,
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
  setIsDisplayed: React.Dispatch<React.SetStateAction<boolean>>
}

function SearchResults({
  loading,
  searchResults,
  setSearchQuery,
  setIsDisplayed,
}: IProps) {
  const onClick = (itemName: string) => {
    setSearchQuery(itemName);
    setIsDisplayed(false);
  };
  return (
    <div className="absolute left-0 top-5 z-10 w-full">
      <Card>
        <div className="flex flex-col space-y-4 pr-2 max-h-80 overflow-auto scrollbar">
          {loading && (<>Loading...</>)}
          {searchResults?.sort(
            (a, b) => b.LevelItem - a.LevelItem,
          )
            .map((result) => (
              <Link onClick={() => onClick(result.Name_fr)} to={`${RoutesEnum.ITEM}/${result.ID}`}>
                <div className="flex flex-row items-center" key={result.ID}>
                  <img className="rounded-2xl h-8 w-8" src={`https://xivapi.com${result.IconHD}`} alt="" />
                  <div className="flex flex-col">
                    <span className="text-sm ml-2 italic">{result.Name_fr}</span>
                    <span className="text-xs ml-2 italic text-neutralGrey">
                      iLvl
                      {' '}
                      {result.LevelItem}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </Card>
    </div>
  );
}

export { SearchResults };
