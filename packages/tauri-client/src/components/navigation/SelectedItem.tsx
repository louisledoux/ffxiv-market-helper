import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { truncate } from 'lodash';
import { Link } from 'react-router-dom';
import { RoutesEnum } from '../../routes/Routes.enum';
import { KofiIcon } from '../icons/KofiIcon';
import { SettingsIcon } from '../icons/SettingsIcon';

type SelectedItemProps = {
  label: string,
  itemName: string,
  dark?: boolean | null,
}
function SelectedItem({
  label,
  itemName,
  dark,
}: SelectedItemProps) {
  return (
    <div className="relative">
      <div className="flex flew-row justify-between gap-5 mt-7">
        <div className="flex-1">
          <div className="relative flex flex-col">
            <span className={`text-xs
              ${dark ? 'bg-darkBackground' : 'bg-lightBackground'}
              absolute px-2 text-primary -top-2 left-3
            `}
            >
              {label}
            </span>
            <Link to={RoutesEnum.ALERTS}>
              <FontAwesomeIcon
                className="
                  text-primary absolute inset-y-3 right-3
                  transition ease-in-out hover:scale-110 duration-300
                "
                icon={['fas', 'times-circle']}
              />
            </Link>
            <div
              className={`
              ${dark ? 'bg-darkBackground' : 'bg-lightBackground'}
              peer border rounded-md focus:outline-none py-2 pl-5 pr-8
              border-primary text-sm placeholder:italic placeholder:text-neutralGrey
            `}
            >
              <p>
                {truncate(itemName, { length: 28 })}
              </p>
            </div>
          </div>
        </div>
        <KofiIcon />
        <SettingsIcon />
      </div>
    </div>
  );
}

SelectedItem.defaultProps = {
  dark: false,
};

export { SelectedItem };
