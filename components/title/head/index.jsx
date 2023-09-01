import React from 'react'

function index({children, secondary}) {

    const secondaryClass = secondary ? 'text-3xl' : 'text-4xl'
    const hideIcon = secondary ? 'hidden' : 'block'

  return (
        <div className='mb-10'>
              <h1 className={`font-links-1 font-semibold text-4xl mb-3 text-white-1 ${secondaryClass}`}>{children}</h1>
              <div className={`h-1 bg-primary w-16 rounded ${hideIcon}`}></div>
        </div>
  )
}

export default index