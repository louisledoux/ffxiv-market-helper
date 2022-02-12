import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SettingsIcon() {
  return (
    <div className="flex transition ease-in-out hover:scale-110">
      <button
        type="button"
      >
        <FontAwesomeIcon
          className="text-primary"
          size="lg"
          icon={['fas', 'cog']}
        />
      </button>
    </div>
  );
}

export { SettingsIcon };
