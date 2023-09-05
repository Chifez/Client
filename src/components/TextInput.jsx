import React from 'react';

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
      <input
        type={type ? type : 'text'}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={` border-[1.5px] ${
          touched && error ? 'border-[red]' : 'border-[#64BCF4]'
        } rounded-lg h-[2.5rem] focus:outline-none px-2 ${extraclass}`}
      />
      {touched && error && (
        <p className="absolute left-0 -bottom-4 text-[red] text-sm">{error}</p>
      )}
    </div>
  );
};

export default TextInput;
