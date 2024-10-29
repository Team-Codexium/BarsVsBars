import { Link } from 'react-router-dom'
import AppWrap from '../wrapper/AppWrapper'

const Home = () => {
  return (
    <div className='h-[100vh] w-full flex justify-center items-center flex-col px-2'>
      <h1 className='text-4xl text-white font-season text-center font-bold pb-2'>Welcome to HH Battle Arena</h1>
      <p className='text-md text-white font-poppins font-normal text-center '>
        Your one-stop solution for hosting and participating in high-heel ed hockey battles!
      </p>
      <div className="relative mt-8">
        <div
          className="absolute -inset-2 rounded-lg bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-[#18122B] via-[#393053] to-pink-600 opacity-50 blur-2xl"
        ></div>
        <Link to="/sign-up" className="relative flex w-32 h-12 items-center justify-center border border-zinc-700 rounded-lg bg-primary hover:bg-secondary hover:text-primary text-slate-300 font-bold">
          <span className="uppercase">Let&apos;s</span>
          <span className="ml-2 font-bold">Battle</span>
        </Link>
      </div>
    </div>
  )
}

export default AppWrap(Home)