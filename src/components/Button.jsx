import React from 'react';

const Button = ({ text, Icon, onClick, classstyle, route }) => {

  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center lg:px-6 px-3 lg:py-4 py-2 bg-black text-white font-pregular lg:text-[20px] text-[13px] 
      lg:rounded-3xl rounded-2xl shadow-md hover:bg-secondary hover:shadow-lg hover:cursor
      transition-all duration-200 ease-in-out"
    >
      {text}
      {Icon && <Icon className={classstyle}/>}
    </button>
  );
};

export default Button;
