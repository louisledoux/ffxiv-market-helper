import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type InputType = 'text' | 'email' | 'password';

interface IProps {
  label: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  type: InputType;
  required: boolean;
  error: string;
  id: string;
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
}: IProps) {
  return (
    <label htmlFor={id} className="relative flex flex-col w-full">
      <span className={`
        ${required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ''} text-xs
        absolute px-2 text-primary bg-lightBackground -top-2 left-3
      `}
      >
        {label}
      </span>
      <FontAwesomeIcon
        className="text-primary absolute inset-y-3 right-3"
        icon={['fas', 'search']}
      />
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(name, { required })}
        className="
          peer bg-lightBackground border rounded-md focus:outline-none py-2 pl-5 pr-8
          border-primary text-sm placeholder:italic placeholder:text-neutralGrey
        "
      />
      <p className="invisible peer-invalid:visible text-red text-xs">{error}</p>
    </label>
  );
}

export { Input };
