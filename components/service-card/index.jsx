import React from 'react'
import { PiCodeBold } from 'react-icons/pi'


function index({icon, title, desc}) {


  const Icons = icon;

  return (
     <div className='w-full lg:w-[45%] mr-5  mb-5 bg-card-bg flex items-start px-6 py-8 rounded-3xl shadow-default'>
                  <div className='mr-5'>
                    <Icons className='text-5xl text-primary' />
                  </div>
                  <div>
                    <h2 className='text-white-1 font-links-1 font-semibold text-xl '>{title}</h2>
                    <p className='text-white-3 text-sm'>{desc}</p>
                  </div>
      </div>
  )
}

export default index