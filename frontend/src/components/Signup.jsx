import AppWrap from '../wrapper/AppWrapper'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Link, useNavigate} from "react-router-dom"

// Define the validation schema with Yup
const schema = yup.object().shape({
  fullName: yup.string().required('Full name is required').min(3, 'Full name must be at least 3 characters'),
  email: yup.string().required('Email is required').email('Must be a valid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  userType: yup.string().required('User type is required'),
  bio: yup.string().max(150, 'Bio can only be 150 characters'),
  profilePicture: yup
    .mixed()
    .test('fileSize', 'File size should be less than 2MB', (value) =>
      !value || value.length === 0 || (value[0] && value[0].size <= 2000000)
    )
    .test('fileType', 'Only jpg/jpeg/png formats are allowed', (value) =>
      !value || value.length === 0 || (value[0] && ['image/jpeg', 'image/png', 'image/jpg'].includes(value[0].type))
    ),
});

const inputDiv = "flex flex-col space-y-1"
const inputField = "shadow appearance-none border  rounded-lg py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline";
const inputErrors = "text-red-500"

const SignUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission (e.g., send data to backend)
    console.log(data);
    navigate("/dashboard");
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

        <p className={`${inputErrors}`}>{errors.fullName?.message}</p>
      </div>

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

      <div className={`${inputDiv}`}>
        <label>Confirm Password</label>
        <input className={`${inputField}`} {...register('confirmPassword')} type="text" placeholder="password" />
        <p className={`${inputErrors}`}>{errors.confirmPassword?.message}</p>
      </div>

      <div className={`${inputDiv}`}>
        <label>User Type : Select user type</label>
        <select className='p-2 rounded-md' {...register('userType')}>
          <option value="artist">Artist</option>
          <option value="fan">Fan</option>
        </select>
        <p className={`${inputErrors}`}>{errors.userType?.message}</p>
      </div>

      <div className={`${inputDiv}`}>
        <label>Bio</label>
        <textarea className={`${inputField}`} {...register('bio')} placeholder="Tell us about yourself" />
        <p className={`${inputErrors}`}>{errors.bio?.message}</p>
      </div>

      <div className={`${inputDiv}`}>
        <label>Profile Picture</label>
        <input {...register('profilePicture')} type="file" accept="image/jpeg, image/png, image/jpg" />
        <p className={`${inputErrors}`}>{errors.profilePicture?.message}</p>
      </div>

      <button className='bg-primary p-2 rounded-md w-full text-secondary' type="submit">Sign Up</button>
      <p>Already have an account?<Link className="text-primary ml-2 font-bold" to="/log-in">Log in</Link></p>
    </form>
    </div>
  );
};

export default AppWrap(SignUp);
