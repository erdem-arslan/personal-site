import { Sidebar, About, Header } from '../../components'


export default function Home()
{
  return (
    <div className='w-full'>
      <div className="lg:w-3/4 w-full mx-auto pt-5  lg:py-16 flex flex-col lg:flex-row justify-between">
        <Sidebar />
        <div className="lg:w-[75%] w-full bg-dark-gray lg:h-full border rounded-3xl border-light-gray relative lg:mt-0 mt-6 mx-5 lg:mb-0 mb-20">
          <Header />
          <About />
        </div>
      </div>
    </div>

  )
}
