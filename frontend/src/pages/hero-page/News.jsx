import React from 'react'

const News = () => {

  const updates = [
    'Ishba ekta bolod. Tui chup thak',
  ]

  return (
    <div className='flex justify-center w-full h-16 bg-primary'>
        <div className='flex items-center justify-center xl:w-[140vh] lg:w-[100vh] w-full h-full overflow-hidden'>
            {/* <h1 className='w-auto animate-marquee animate-marquee-fast whitespace-nowrap font-psemibold text-white'>
                Ishba ekta bolod. Tui chup thak
            </h1> */}

            <ul className='flex items-end justify-center gap-10 text-white animate-infinite-scroll w-full'>
              {[...updates].map((update, index) => (
                <li key={index} className='flex gap-2'>
                  <p>{update}</p>
                </li>
              ))}
            </ul>

        </div>
    </div>
  )
}

export default News