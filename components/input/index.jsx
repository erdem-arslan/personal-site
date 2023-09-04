import React from 'react'

function index({ type, placeholder, name })
{
    return (
        <input type={type} name={name} required className='w-full lg:w-[48%] h-12 bg-card-bg rounded-xl shadow-default mt-3 px-4 text-primary font-semibold opacity-70' placeholder={placeholder} />

    )
}

export default index