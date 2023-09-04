import React from 'react';
import ModalImage from 'react-modal-image';



function index({image, title, subtitle}) {
    return (
    <div className='w-full md:w-[30%] mb-14'>
          <div className='relative'>
                <ModalImage className='w-full h-48 object-top object-cover cursor-pointer hover:p-1 hover:opacity-50 opacity-80 transition rounded-3xl '
                small={image} large={image} hideDownload={true} alt={title}/>
          </div>
          <div className='ml-2 mt-1'>
                <h3 className='font-links-1 font-semibold text-2xl text-white-1'>{title}</h3>
                <p className='font-links-1 text-white-3 '>{subtitle}</p>
          </div>
        </div>
  )
}

export default index