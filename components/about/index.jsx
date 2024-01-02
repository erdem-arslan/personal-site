import React from 'react'
import {Card} from '../index.js'
import { SiAltiumdesigner } from 'react-icons/si'
import { PiCodeBold, PiDesktopTower } from 'react-icons/pi'
import { MdDeveloperMode, MdDesignServices } from 'react-icons/md'
import { GiVideoCamera } from 'react-icons/gi'



function About() {
  return (
    <div className='mt-6 ml-6'>
            <div className='mb-10'>
              <h1 className='font-links-1 font-semibold text-4xl mb-3 text-white-1'>About Me</h1>
              <div className='h-1 bg-primary w-16 rounded'></div>
            </div>
            <div className='text-white-2 text-md mr-5'>
              <p className='mb-6'>
              Hello! I&apos;m Erdem, a Front-end Developer. I&apos;m a passionate individual who loves crafting creative solutions and is dedicated to both design and coding. I focus on merging aesthetics and functionality, keeping user experience at the forefront.
              </p>
              <p>
              With my education and experience, I have built a strong foundation in modern web technologies. I&apos;ve honed my expertise in React, NextJS, JavaScript and Tailwind CSS and continuously stay updated with new technologies and trends. I contribute to strengthening brands&apos; digital presence by creating user-friendly and impressive web interfaces in every project.
              </p>
            </div>

            <div className='mt-14'>
              <h1 className='font-links-1 font-black text-3xl text-white-1 mb-10'>What I&apos;m Doing</h1>
              <div className='flex  items-start flex-wrap'>
                <Card icon={SiAltiumdesigner} title="Web Design" desc="High-quality design made at a professional level."/>
                <Card icon={PiCodeBold} title="Web Development" desc="High-quality development of sites at the professional level."/>
              </div>
            </div>
          </div>
  )
}

export default About
