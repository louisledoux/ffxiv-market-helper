import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLogout } from '../../api/hooks/useLogout';

function SettingsIcon() {
  const [submitLogout] = useLogout();

  return (
    <div className="flex transition ease-in-out hover:scale-110">
      <button
        type="button"
        onClick={() => submitLogout()}
      >
        <FontAwesomeIcon
          className="text-primary"
          size="lg"
          icon={['fas', 'sign-out-alt']}
        />
      </button>
    </div>
  );
}

export { SettingsIcon };
