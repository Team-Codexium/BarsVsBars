import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import AppWrap from '../wrapper/AppWrap';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../lib/userModel';
import { useState } from 'react';
import Spinner from './Spinner';

const inputDiv = "flex flex-col space-y-1"
const inputField = "shadow appearance-none border  rounded-lg py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline";
const inputErrors = "text-red-500"



const Login = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", data, {
        withCredentials: true
      });
      // console.log("response",response);

      if (response.data.success) {
        navigate("/dashboard");
      }

    } catch (error) {
      console.error("Error during login: ", error.message);
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.message);
      }
      if (error.response.status === 401) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <div className="h-[100vh] w-full m-auto flex flex-col space-y-8">


      <div className='flex flex-col text-secondary px-8 justify-center items-center pt-16'>
        <h1 className='font-season text-4xl font-extrabold text-center mb-4'>Welcome back we missed you</h1>
        <p className='font-popping text-lg font-normal text-center font-season'>
          Explore what has happened in world of Bars vs Bars.
        </p>
      </div>


      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3 bg-secondary rounded-md p-8">

        <div className={`${inputDiv}`}>
          <label>Email</label>
          <input className={`${inputField}`} {...register('email')} placeholder="email@example.com" type="email" />
          {errors.email && <p className={`${inputErrors}`}>{errors.email?.message}</p>}
        </div>

        <div className={`${inputDiv}`}>
          <label>Password</label>
          <input className={`${inputField}`} {...register('password')} type="password" placeholder="••••••••" />
          {errors.password && <p className={`${inputErrors}`}>{errors.password?.message}</p>}
        </div>

        <button className={`p-2 rounded-md w-full text-secondary ${isSubmitting ? "bg-[#1F2937]" : "bg-primary"}`} type="submit" >{isSubmitting ? (
          <div className="flex justify-center items-center space-y-5">
            <Spinner /> Logging in
          </div>)
          : "Log in"}</button>
        {errorMessage && <p className="font-bold font-poppinp text-center text-red-800">{errorMessage}</p>}
        <p>First time using it?<Link className="text-primary ml-2 font-bold" to="/sign-up">Register here to rock the world</Link></p>
      </form>
    </div>
  )
}

export default AppWrap(Login)