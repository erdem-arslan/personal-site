import React from 'react'
import { BsBook } from 'react-icons/bs'
import { FaRegDotCircle } from 'react-icons/fa'



function Resume() {
  return (
    <div className='mt-6 ml-6'>
            <div className='mb-10'>
              <h1 className='font-links-1 font-semibold text-4xl mb-3 text-white-1'>Resume</h1>
              <div className='h-1 bg-primary w-16 rounded'></div>
            </div>
            <div>
                <div className='flex items-center'>
                    <div className='p-4 bg-card-bg w-12 h-12 flex items-center justify-center rounded-xl shadow-default'>
                        <BsBook className=' text-primary ' size={30} />
                    </div>
                    <h1 className='text-2xl font-links-1 text-white-1 ml-3 font-semibold '>Education</h1>
                </div>
                <div className='ml-8 mt-8'>
                    <div className='flex flex-start'>
                        <div className='mr-5 pt-1 pl-1 flex flex-col items-center'>
                            <FaRegDotCircle className='text-primary' />
                            <div className='w-[1px] h-24 bg-primary'></div>
                            <FaRegDotCircle className='text-primary' />
                        </div>
                        <div>
                            <div className='mb-10'>
                                <h1 className='text-white-1 font-semibold'>Kütahya Dumlupınar Universty</h1>
                                <p className='text-primary text-sm opacity-80 mt-1 mb-2'>2021 - 2023</p>
                                <p className='text-white-3 text-lg'>Computer Programming <span className='text-[10px] text-primary opacity-70'>03,45 / 4</span> </p>
                            </div>
                            <div>
                                <h1 className='text-white-1 font-semibold'>Yıldırım Beyazıt IMKB M.T.A.L</h1>
                                <p className='text-primary text-sm opacity-80 mt-1 mb-2'>2015 - 2019</p>
                                <p className='text-white-3 text-lg'>Computer Science | <span className='text-[10px] text-primary opacity-70'>Web D</span> </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            
          </div>
  )
}

export default Resume