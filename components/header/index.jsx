import React from 'react'
import Link from 'next/link'

function index() {
  return (
<div className='backdrop-blur-blur-1 fixed lg:absolute bottom-0 left-0 lg:bottom-auto lg:left-auto lg:bottom- lg:top-0 lg:right-0 w-full lg:w-3/5 bg-light-gray rounded-tr-3xl rounded-tl-3xl lg:rounded-tl-none lg:rounded-bl-3xl'>
            <ul className='flex justify-evenly lg:justify-between'>
              <li className='py-5 px-2'>
                <Link href="/" className='text-white-2 font-links-1 font-semibold text-sm lg:text-lg hover:text-white-3 transition'>About</Link>
              </li>
              <li className='py-5 px-2'>
                <Link href="/" className='text-white-2 font-links-1  font-semibold text-sm lg:text-lg hover:text-white-3 transition'>Resume</Link>
              </li>
              <li className='py-5 px-2'>
                <Link href="/" className='text-white-2 font-links-1  font-semibold text-sm lg:text-lg hover:text-white-3 transition'>Portfolio</Link>
              </li>
              <li className='py-5 px-2'>
                <Link href="/" className='text-white-2 font-links-1  font-semibold text-sm lg:text-lg hover:text-white-3 transition'>Blog</Link>
              </li>
              <li className='py-5 px-2'>
                <Link href="/" className='text-white-2  font-links-1 font-semibold text-sm lg:text-lg hover:text-white-3 transition'>Contact</Link>
              </li>
            </ul>
        </div>
  )
}

export default index