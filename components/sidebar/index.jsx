import React from 'react'
import { AiOutlineMail, AiFillLinkedin,AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { MdLocationPin} from 'react-icons/md'
import { Social } from '../index.js'


function Sidebar() {
  return (
    <div className='w-[23%] h-full'>
          <div className=" bg-dark-gray h-screen border rounded-3xl border-light-gray flex flex-col justify-center items-center">
              <div className="w-36 h-36 bg-light-gray rounded-3xl mb-6">
                <img src="my-avatar.png" className="w-full" />
              </div>
              <div className="w-full text-3xl text-white-1 text-center mb-6">
                <h1 className='font-header'>Erdem Arslan</h1>
              </div>
              <div className='mb-10'>
                <p className="py-2 px-3 text-white-2 text-sm bg-light-gray inline rounded-lg font-header">Front End Developer</p>
              </div>
              <div className="border border-light-gray w-4/5"></div>
              <Social url="mailto:erdemarsl4n@gmail.com" icon={AiOutlineMail} label="MAIL" link="erdemarsl4n@gmail.com"/>
              <Social url="https://www.linkedin.com/in/erdemarsl4n/" icon={AiFillLinkedin} label="LINKEDIN" link="in/erdemarsl4n"/>
              <Social url="https://www.twitter.com/erdemarsl4n" icon={AiOutlineTwitter} label="TWITTER" link="/erdemarsl4n"/>
              <Social url="https://www.github.com/erdem-arslan/" icon={AiFillGithub} label="GITHUB" link="/erdem-arslan"/>
              <Social icon={MdLocationPin} label="LOCATION" link="Bursa / Turkey"/>
            </div>
    </div>

  )
}

export default Sidebar