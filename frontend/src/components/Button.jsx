import React from 'react';

const Button = ({ text, Icon, onClick, iconSize }) => {

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 xl:px-[10px] xl:py-[8px] xl:text-[12px] xl:rounded-xl md:px-[8px] md:py-[6px] md:rounded-[10px] md:text-[12px] px-1 py-1 rounded-[5px] sm:text-[10px] text-[9px] bg-primary text-white font-rregular shadow-md hover:bg-[#212529] hover:shadow-lg hover:cursor hover:gap-4
      transition-all duration-200 ease-in-out`}
    >
      {text}
      {Icon && <Icon size={iconSize}/>}
    </button>
  );
};

export default Button;
