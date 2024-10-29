import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import AppWrap from '../wrapper/AppWrapper';



const inputDiv = "flex flex-col space-y-1"
const inputField = "shadow appearance-none border  rounded-lg py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline";
const inputErrors = "text-red-500"



const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    Navigate("/dashboard");
  };

  return (
    <div className="h-[100vh] w-full m-auto flex flex-col space-y-8">


      <div className='flex flex-col text-secondary px-8 justify-center items-center pt-16'>
        <h1 className='font-season text-4xl font-extrabold text-center mb-4'>Welcome back we missed you</h1>
        <p className='font-popping text-lg font-normal text-center'>
          Explore what has happened in world of Bars vs Bars.
        </p>
      </div>


      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3 bg-secondary rounded-md p-8">

        <div className={`${inputDiv}`}>
          <label>Email</label>
          <input className={`${inputField}`} {...register('email')} placeholder="email@example.com" type="email" />
          <p className={`${inputErrors}`}>{errors.email?.message}</p>
        </div>

        <div className={`${inputDiv}`}>
          <label>Password</label>
          <input className={`${inputField}`} {...register('password')} type="password" placeholder="••••••••" />
          <p className={`${inputErrors}`}>{errors.password?.message}</p>
        </div>

        <button className='bg-primary p-2 rounded-md w-full text-secondary' type="submit">Log in</button>
        <p>First time using it?<Link className="text-primary ml-2 font-bold" to="/sign-up">Register here to rock the world</Link></p>
      </form>
    </div>
  )
}

export default AppWrap(Login)