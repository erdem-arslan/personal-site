"use client"
import React from 'react'
import { Sidebar, About, Resume, Header, Portfolio, Contact } from '../../components'

export default function Home()
{


  return (
    <div className='w-full'>
      <div className="lg:w-3/4 w-full px-5 mx-auto pt-5 lg:py-16 flex flex-col lg:flex-row justify-between">
        <Sidebar />
        <div className="lg:w-[75%] w-full bg-dark-gray lg:h-full border rounded-3xl border-light-gray relative lg:mt-0 mt-6 px-5 lg:mb-0 mb-20">
          <Header />
          {/* <About /> */}
          {/* <Resume /> */}
          <Portfolio />
          {/* <Contact /> */}
        </div>
      </div>
    </div>

  )
}
