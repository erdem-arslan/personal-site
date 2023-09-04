import React from 'react'
import { BsFillSendCheckFill } from 'react-icons/bs'
import { Input } from '../index.js'

function index()
{
    return (
        <form action='' method='POST'>
            <div className='flex flex-col lg:flex-row justify-between mb-2'>
                <Input type='text' name='name' placeholder='Full Name' />
                <Input type='email' name='email' placeholder='Email' />
            </div>
            <textarea required className='w-full h-32 bg-card-bg rounded-xl shadow-default pt-3 mt-3 px-4 text-primary opacity-70 italic' rows={4} cols={50} placeholder='Message' />
            <div className='text-right '>
                <button className='px-8 py-3 bg-card-bg border hover:bg-primary hover:text-card-bg transition opacity-70 border-primary rounded-xl shadow-default mt-3 text-primary text-lg font-semibold'>
                    <BsFillSendCheckFill className='inline-block mr-2' />
                    Send
                </button>
            </div>
        </form>
    )
}

export default index