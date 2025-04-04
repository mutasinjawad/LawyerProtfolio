import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between justify-center gap-2 items-center w-full lg:h-[100px] sm:h-[10vh] xs:h-[80px] h-[70px] p-8 bg-primary">
        <p className="text-neutral-400 font-rlight xl:text-lg lg:text-[14px] text-[11px]">© Copyright 2025. All Rights Reserved.</p>
        <p className="text-neutral-400 font-rlight xl:text-lg lg:text-[14px] text-[10px]">Developed by 
          <a className='font-rmedium' href='https://www.linkedin.com/in/mutasin-jawad-09b0451b9/'  target='_blank' rel='noopener noreferrer'> Mutasin Jawad</a>
        </p>
    </div>
  )
}

export default Footer