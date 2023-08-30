import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { Sidebar } from '../../components'

export default function Home()
{
  return (
    <div className="w-3/4 mx-auto py-16 flex justify-between">

      <Sidebar />


      {/* CONTENT START */}
      <div className="w-[75%] bg-dark-gray h-screen border rounded-3xl border-light-gray ">

      </div>
      {/* CONTENT END */}
    </div>
  )
}
