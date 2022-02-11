import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type InputType = 'text' | 'email' | 'password';

interface IProps {
  label: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  type: InputType;
  error?: string | null;
  id: string;
  required: boolean;
  dark?: boolean | null;
  search?: boolean | null;
  value?: string | undefined;
}

function Input({
  label,
  placeholder,
  register,
  name,
  type,
  required,
  id,
  error,
  dark,
  search,
  value,
}: IProps) {
  return (
    <label htmlFor={id} className="relative flex flex-col w-full">
      <span className={`
        ${required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ''} text-xs
        ${dark ? 'bg-darkBackground' : 'bg-lightBackground'}
        absolute px-2 text-primary -top-2 left-3
      `}
      >
        {label}
      </span>
      {search && (
      <FontAwesomeIcon
        className="text-primary absolute inset-y-3 right-3"
        icon={['fas', 'search']}
      />
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(name, { required })}
        defaultValue={value}
        className={`
          ${dark ? 'bg-darkBackground' : 'bg-lightBackground'}
          peer border rounded-md focus:outline-none py-2 pl-5 pr-8
          border-primary text-sm placeholder:italic placeholder:text-neutralGrey
        `}
      />
      <p className="invisible peer-invalid:visible text-red text-xs">{error}</p>
    </label>
  );
}

Input.defaultProps = {
  error: null,
  dark: false,
  search: false,
  value: undefined,
};

export { Input };
