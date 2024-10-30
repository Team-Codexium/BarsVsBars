import AppWrap from '../wrapper/AppWrapper'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {Link, useNavigate} from "react-router-dom"
import { userSchema } from '../lib/userModel';
import { inputDiv, inputField } from '../constants';
import Spinner from './Spinner';

// Define the validation schema with Yup



const inputErrors = "text-red-500"

const SignUp = () => {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data) => {
    try {
      // console.log(data);
      const response = await axios.post("http://localhost:3000/api/auth/signup",data, {
        withCredentials: true
      });
      if (response.data.success){
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error while siging up: ", error)
    };
  };


  return (
    <div className="h-[100vh] w-full m-auto flex flex-col space-y-8">
    <div className='flex flex-col text-secondary px-8 justify-center items-center pt-16'>
      <h1 className='font-season text-3xl font-bold text-center'>Let&apos;s Rock the world</h1>
      <p className='font-popping text-sm'>Join the Bars vs Bars revolution today by creating a free account</p>
    </div>
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 bg-secondary rounded-md px-8 py-4">
      <div className={`${inputDiv}`}>
        <label htmlFor='fullName' className=''>Full Name</label>
        <input name='fullName' id='fullName' className={`${inputField}`} {...register('fullName')}  />

        {errors.fullName && <p className={`${inputErrors}`}>{errors.fullName?.message}</p>}
      </div>

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

      <div className={`${inputDiv}`}>
        <label>Confirm Password</label>
        <input className={`${inputField}`} {...register('confirmPassword')} type="text" placeholder="password" />
        {errors.confirmPassword && <p className={`${inputErrors}`}>{errors.confirmPassword?.message}</p>}
      </div>

      <div className={`${inputDiv}`}>
        <label>User Type : Select user type</label>
        <select className='p-2 rounded-md' {...register('userType')}>
          <option value="artist">Artist</option>
          <option value="fan">Fan</option>
        </select>
        {errors.userType && <p className={`${inputErrors}`}>{errors.userType?.message}</p>}
      </div>

      <div className={`${inputDiv}`}>
        <label>Bio</label>
        <textarea className={`${inputField}`} {...register('bio')} placeholder="Tell us about yourself" />
        {errors.bio && <p className={`${inputErrors}`}>{errors.bio?.message}</p>}
      </div>

      {/* <div className={`${inputDiv}`}>
        <label>Profile Picture</label>
        <input {...register('profilePicture')} type="file" accept="image/jpeg, image/png, image/jpg" />
        {errors.profilePicture && <p className={`${inputErrors}`}>{errors.profilePicture?.message}</p>}
      </div> */}

      <button className='bg-primary p-2 rounded-md w-full text-secondary' type="submit">{isSubmitting ? (
          <div className="flex justify-center items-center space-y-5">
            <Spinner /> Signing in
          </div>)
          : "Sign up"}</button>
      <p>Already have an account?<Link className="text-primary ml-2 font-bold" to="/log-in">Log in</Link></p>
    </form>
    </div>
  );
};

export default AppWrap(SignUp);
