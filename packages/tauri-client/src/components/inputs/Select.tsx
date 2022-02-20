import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface SelectProps {
  label: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  id: string;
  required: boolean;
  dark?: boolean | null;
  options: string[],
  setValue?: React.Dispatch<React.SetStateAction<string>> | undefined,
}

function Select({
  label,
  placeholder,
  register,
  name,
  required,
  id,
  dark,
  options,
  setValue,
}: SelectProps) {
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
      <FontAwesomeIcon
        className="text-primary absolute inset-y-3 right-3"
        icon={['fas', 'angle-down']}
      />
      <select
        id={id}
        placeholder={placeholder}
        {...register(name, { required })}
        className={`
          ${dark ? 'bg-darkBackground' : 'bg-lightBackground'}
          peer border rounded-md focus:outline-none py-2 pl-5 pr-8
          border-primary text-sm placeholder:italic placeholder:text-neutralGrey
          -webkit-appearance-none appearance-none
        `}
        onChange={(e) => {
          if (setValue) setValue(e.target.value);
        }}
      >
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

Select.defaultProps = {
  setValue: undefined,
  dark: false,
};

export { Select };
