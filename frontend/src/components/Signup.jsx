import React from 'react';
import AppWrap from "../wrapper/AppWrap";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { userSchema } from "../lib/userModel";
import { inputDiv, inputField } from "../constants";
import Spinner from "./Spinner";
import { useAuth0 } from "@auth0/auth0-react";

const inputErrors = "text-red-500";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        data,
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error while signing up: ", error);
    }
  };

  const handleOAuthLogin = (provider) => {
    window.location.href = `http://localhost:3000/api/auth/${provider}`;
  };
//Auth 0 authentication method
const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full sm:w-full md:max-w-md mx-auto flex flex-col space-y-8 overflow-hidden">
        <div className="flex flex-col text-secondary px-8 justify-center items-center pt-8">
          <h1 className="font-season text-3xl font-bold text-center">
            Let&apos;s Rock the World
          </h1>
          <p className="font-popping text-sm text-center">
            Join the Bars vs Bars revolution today by creating a free account
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col space-y-4 bg-secondary rounded-md px-8 py-6 shadow-lg overflow-auto"
        >
          <div className={`${inputDiv}`}>
            <label htmlFor="fullName">Full Name</label>
            <input
              name="fullName"
              id="fullName"
              className={`${inputField}`}
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className={`${inputErrors}`}>{errors.fullName?.message}</p>
            )}
          </div>

          <div className={`${inputDiv}`}>
            <label>Email</label>
            <input
              className={`${inputField}`}
              {...register("email")}
              placeholder="email@example.com"
              type="email"
            />
            {errors.email && (
              <p className={`${inputErrors}`}>{errors.email?.message}</p>
            )}
          </div>

          <div className={`${inputDiv}`}>
            <label>Password</label>
            <input
              className={`${inputField}`}
              {...register("password")}
              type="password"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className={`${inputErrors}`}>{errors.password?.message}</p>
            )}
          </div>

          <div className={`${inputDiv}`}>
            <label>Confirm Password</label>
            <input
              className={`${inputField}`}
              {...register("confirmPassword")}
              type="password"
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <p className={`${inputErrors}`}>
                {errors.confirmPassword?.message}
              </p>
            )}
          </div>

          <div className={`${inputDiv}`}>
            <label>User Type: Select user type</label>
            <select className="p-2 rounded-md" {...register("userType")}>
              <option value="artist">Artist</option>
              <option value="fan">Fan</option>
            </select>
            {errors.userType && (
              <p className={`${inputErrors}`}>{errors.userType?.message}</p>
            )}
          </div>

          <div className={`${inputDiv}`}>
            <label>Bio</label>
            <textarea
              className={`${inputField}`}
              {...register("bio")}
              placeholder="Tell us about yourself"
            />
            {errors.bio && (
              <p className={`${inputErrors}`}>{errors.bio?.message}</p>
            )}
          </div>

          <button
            className="bg-primary p-2 rounded-md w-full text-secondary font-semibold hover:bg-primary-dark transition duration-200"
            type="submit"
          >
            {isSubmitting ? (
              <div className="flex justify-center items-center">
                <Spinner /> Signing up
              </div>
            ) : (
              "Sign up"
            )}
          </button>

          <p className="text-center">
            Already have an account?
            <Link className="text-primary ml-2 font-bold" to="/log-in">
              Log in
            </Link>
          </p>

          <div className="text-center mt-4 flex flex-col">
            <p>Or sign up using:</p>
            <div className="flex justify-center space-x-4 mt-2">
            <button onClick={() => loginWithRedirect()}>Log In</button>
              <button
                type="button"
                onClick={() => handleOAuthLogin("github")}
                className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-200"
              >
                GitHub
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppWrap(SignUp);
