import React from 'react';

const Button = ({ name, extraclass, handleClick, loading }) => {
  return (
    <button
      className={`bg-[#00398E] text-[#ffffff] text-lg font-Esemi ${extraclass}`}
      onClick={(e) => handleClick()}
      type="button"
      disabled={loading}
    >
      {loading === true ? 'loading...' : name}
    </button>
  );
};

export default Button;
