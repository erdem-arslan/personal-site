import React, { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import ModalImage from 'react-modal-image';



function index({image, title, subtitle}) {
    const [showEye, setShowEye] = useState(false);

  const handleMouseEnter = () => {
    setShowEye(true);
  };

  const handleMouseLeave = () => {
    setShowEye(false);
  };

  return (
    <div className='w-full md:w-[30%] mb-14'>
          <div className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {showEye && (
                <div>
                    <div className=''></div>
                    <AiFillEye size={80} className='text-primary text-3xl z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
                </div>
              )}
              <ModalImage
                className='w-full h-48 object-top object-cover cursor-pointer hover:p-1 opacity-70 rounded-3xl'
                small={image}
                large={image}
                hideDownload={true}
                alt={title}
                
              />
              </div>
          <div className='ml-2 mt-1'>
            <h3 className='font-links-1 font-semibold text-2xl text-white-1'>{title}</h3>
            <p className='font-links-1 text-white-3 '>{subtitle}</p>
          </div>
        </div>
  )
}

export default index