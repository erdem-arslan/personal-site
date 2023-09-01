import React from 'react'
import { BsBook } from 'react-icons/bs'

function index({children, icon}) {

    const Icon = icon

  return (
        <div className='flex items-center'>
            <div className='p-4 bg-card-bg w-12 h-12 flex items-center justify-center rounded-xl shadow-default'>
                <Icon className=' text-primary ' size={30} />
            </div>
            <h1 className='text-2xl font-links-1 text-white-1 ml-3 font-semibold '>{children}</h1>
        </div>

  )
}

export default index