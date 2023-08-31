import React from 'react'
import Link from 'next/link'

function index({label, url = "/", link, icon}) {

    const Icons = icon;

  return (
        <div className='w-full lg:w-4/5 float-left ml-6 lg:float-none '>
          <div className='flex items-center py-4'>
            <div className=' bg-dark-gray h-12 w-12 rounded-lg flex items-center justify-center shadow-default'>
              <Icons className='text-primary text-xl ' />
            </div>
            <div className='ml-4 truncate'>
              <p className='text-white-2 text-sm font-semibold font-links-1'>{label}</p>
              <Link className='text-white-1 text-md font-links-1' href={url}>{link}</Link>
            </div>
          </div>
        </div>
  )
}

export default index