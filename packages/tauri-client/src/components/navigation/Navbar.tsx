import { useForm } from 'react-hook-form';
import { KofiIcon } from '../icons/KofiIcon';
import { SettingsIcon } from '../icons/SettingsIcon';
import { Input } from '../inputs/Input';

function Navbar() {
  const { register } = useForm();

  return (
    <div className="flex flex-row mt-7">
      <Input
        label="Rechercher"
        placeholder="Rechercher un produit"
        register={register}
        name="item"
        type="text"
        required={false}
        id="item"
        error=""
      />
      <KofiIcon />
      <SettingsIcon />
    </div>
  );
}

export { Navbar };
