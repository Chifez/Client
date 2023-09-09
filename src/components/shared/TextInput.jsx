import React from 'react';
import { MdError } from 'react-icons/md';

const TextInput = ({
  name,
  type,
  title,
  placeholder,
  value,
  handleChange,
  error,
  touched,
  titleclass,
  extraclass,
}) => {
  // const { InputError } = error;

  return (
    <div className="relative flex flex-col items-start ">
      <label htmlFor={name} className={`ml-2 ${titleclass}`}>
        {title}
      </label>
      <span>
        <input
          type={type ? type : 'text'}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          className={`relative border-[1.5px] ${
            touched && error ? 'border-red-500' : 'border-[#64BCF4]'
          } rounded-lg h-[2.5rem] focus:outline-none px-2 ${extraclass}`}
        />
        {touched && error && (
          <MdError className="absolute right-2 top-[55%] text-red-500" />
        )}
      </span>
      {touched && error && (
        <p className="absolute right-2 -bottom-4 text-red-500 text-xs">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextInput;
