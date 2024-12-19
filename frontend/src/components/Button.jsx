import React from 'react';

const Button = ({ text, Icon, onClick, iconSize }) => {

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center xl:px-5 px-3 gap-2 xl:py-4 lg:py-3 py-2 bg-black text-white font-pregular xl:text-base text-sm 
      xl:rounded-3xl rounded-2xl shadow-md hover:bg-secondary hover:shadow-lg hover:cursor hover:gap-4
      transition-all duration-200 ease-in-out`}
    >
      {text}
      {Icon && <Icon size={iconSize}/>}
    </button>
  );
};

export default Button;
