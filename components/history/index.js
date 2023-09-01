import React from 'react'
import { FaRegDotCircle } from 'react-icons/fa'

function index({ title, date, desc, other })
{
    return (
        <div className='ml-8 mt-8'>
            <div className='flex flex-start'>
                <div className='mr-5 pt-1 pl-1 flex flex-col items-center'>
                    <FaRegDotCircle className='text-primary' />
                </div>
                <div>
                    <div className='mb-1'>
                        <h1 className='text-white-1 font-semibold text-xl'>{title}</h1>
                        <p className='text-primary text-xs opacity-80 mt-1 mb-2'>{date}</p>
                        <p className='text-white-3 text-lg'>{desc}<span className='text-[10px] text-primary opacity-70'>{other}</span> </p>
                    </div>
                </div>
            </div>
        </div>)
}

export default index