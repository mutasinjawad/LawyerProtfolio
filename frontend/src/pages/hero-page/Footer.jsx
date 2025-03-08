import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between justify-center gap-2 items-center lg:h-[12vh] h-[10vh] p-16 bg-[#212529]">
        <p className="text-neutral-400 font-plight xl:text-lg text-[10px]">© Copyright 2025. All Rights Reserved.</p>
        <p className="text-neutral-400 font-plight xl:text-lg text-[10px]">Developed by 
          <span className='font-pmedium'> Mutasin Jawad</span>
        </p>
    </div>
  )
}

export default Footer