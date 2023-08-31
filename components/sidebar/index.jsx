"use client"
import React from 'react'
import { useState } from 'react'

import { AiOutlineMail, AiFillLinkedin,AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { MdKeyboardArrowDown} from 'react-icons/md'
import { MdLocationPin} from 'react-icons/md'
import { Social } from '../index.js'


function Sidebar() {
  const [isSocialVisible, setSocialVisible] = useState(false)

  const handleOpenButton=()=>{
    setSocialVisible(!isSocialVisible)
  }
  return (
    <div className='lg:w-[23%] w-full lg:h-full mx-5 lg:mx-0 relative'>

          <div onClick={handleOpenButton} className='open-button lg:hidden absolute top-0 right-0 h-10 w-10 rounded-tr-3xl rounded-bl-3xl shadow-shadow-2 text-center bg-card-bg flex justify-center items-center '>
            <MdKeyboardArrowDown className={`text-primary text-2xl ${isSocialVisible?'rotate-180 transition':'transition'}`}/>
          </div>

          <div className=" bg-dark-gray lg:h-screen border rounded-3xl border-light-gray flex flex-col justify-center items-center">

            <div className='flex lg:flex-col lg:items-center justify-center my-5'>
              <div className="w-36 lg:h-36 bg-light-gray rounded-3xl lg:mb-6">
                <img src="my-avatar.png" className="w-full" />
              </div>
              <div className="w-full text-2xl lg:text-3xl text-white-1 text-left md:text-center ml-4 lg:mb-10">
                <h1 className='font-header'>Erdem Arslan</h1>
                <p className="py-2 px-3 text-white-2 text-xs lg:text-sm bg-light-gray inline rounded-lg font-header">Front End Developer</p>
              </div>
            </div>

              <div className={`border border-light-gray w-4/5 lg:block ${isSocialVisible?'':'hidden'}`}></div>

              <div className={`${isSocialVisible?'':'hidden'} lg:block `}>
    
                <Social url="mailto:erdemarsl4n@gmail.com" icon={AiOutlineMail} label="MAIL" link="erdemarsl4n@gmail.com"/>
                <Social url="https://www.linkedin.com/in/erdemarsl4n/" icon={AiFillLinkedin} label="LINKEDIN" link="in/erdemarsl4n"/>
                <Social url="https://www.twitter.com/erdemarsl4n" icon={AiOutlineTwitter} label="TWITTER" link="/erdemarsl4n"/>
                <Social url="https://www.github.com/erdem-arslan/" icon={AiFillGithub} label="GITHUB" link="/erdem-arslan"/>
                <Social icon={MdLocationPin} label="LOCATION" link="Bursa / Turkey"/>
              </div>
          </div>
    </div>

  )
}

export default Sidebar