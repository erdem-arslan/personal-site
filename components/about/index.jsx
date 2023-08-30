import React from 'react'
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
            <div className='text-white-2 text-md'>
              <p className='mb-6'>
                I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
              </p>
              <p>
                My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
              </p>
            </div>

            <div className='mt-14'>
              <h1 className='font-links-1 font-black text-3xl text-white-1 mb-10'>What I'm Doing</h1>
              <div className='flex  items-start flex-wrap'>
                <div className='w-[45%] mr-5 mb-5  bg-card-bg flex items-start px-6 py-8 rounded-3xl shadow-default'>
                  <div className='mr-5'>
                    <SiAltiumdesigner className='text-5xl text-primary' />
                  </div>
                  <div>
                    <h2 className='text-white-1 font-links-1 font-semibold text-xl '>Web Design</h2>
                    <p className='text-white-3 text-sm'>
                      The most modern and high-quality design made at a professional level.
                    </p>
                  </div>
                </div>
                <div className='w-[45%] mr-5  mb-5 bg-card-bg flex items-start px-6 py-8 rounded-3xl shadow-default'>
                  <div className='mr-5'>
                    <PiCodeBold className='text-5xl text-primary' />
                  </div>
                  <div>
                    <h2 className='text-white-1 font-links-1 font-semibold text-xl '>Web Development</h2>
                    <p className='text-white-3 text-sm'>
                      High-quality development of sites at the professional level.
                    </p>
                  </div>
                </div>
                <div className='w-[45%] mr-5  mb-5 bg-card-bg flex items-start px-6 py-8 rounded-3xl shadow-default'>
                  <div className='mr-5'>
                    <MdDeveloperMode className='text-5xl text-primary' />
                  </div>
                  <div>
                    <h2 className='text-white-1 font-links-1 font-semibold text-xl '>Mobile Apps</h2>
                    <p className='text-white-3 text-sm'>
                      Professional development of applications for iOS and Android.
                    </p>
                  </div>
                </div>
                <div className='w-[45%] mr-5  mb-5 bg-card-bg flex items-start px-6 py-8 rounded-3xl shadow-default'>
                  <div className='mr-5'>
                    <PiDesktopTower className='text-5xl text-primary' />
                  </div>
                  <div>
                    <h2 className='text-white-1 font-links-1 font-semibold text-xl '>Desktop Apps</h2>
                    <p className='text-white-3 text-sm'>
                      Professional development of applications for iOS and Android.
                    </p>
                  </div>
                </div>
                <div className='w-[45%] mr-5  mb-10 bg-card-bg flex items-start px-6 py-8 rounded-3xl shadow-default'>
                  <div className='mr-5'>
                    <GiVideoCamera className='text-5xl text-primary' />
                  </div>
                  <div>
                    <h2 className='text-white-1 font-links-1 font-semibold text-xl '>Video Montage</h2>
                    <p className='text-white-3 text-sm'>
                      Professional development of applications for iOS and Android.
                    </p>
                  </div>
                </div>
                <div className='w-[45%] mr-5  mb-10 bg-card-bg flex items-start px-6 py-8 rounded-3xl shadow-default'>
                  <div className='mr-5'>
                    <MdDesignServices className='text-5xl text-primary' />
                  </div>
                  <div>
                    <h2 className='text-white-1 font-links-1 font-semibold text-xl '>Creative Design</h2>
                    <p className='text-white-3 text-sm'>
                      Professional development of applications for iOS and Android.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default About