import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({ text, icon, onClick, classStyle, route }) => {
  return (
    <button
      onClick={onClick}
      className="lg:px-9 px-4 lg:py-5 py-3 bg-black text-white font-pregular lg:text-[23px] text-[16px] 
      lg:rounded-[29px] rounded-2xl shadow-md hover:bg-[#303030] hover:shadow-lg hover:cursor
      transition-all duration-200 ease-in-out"
    >
      {text}
      <FontAwesomeIcon icon={icon} className={classStyle}/>
    </button>
  );
};

export default Button;
