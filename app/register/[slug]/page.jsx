"use client";

import { login } from '../../../actions/auth/authenticate.js';
import { signup } from '../../../actions/auth/authenticate.js';
import { googleLogin } from '@/actions/googleAuth/googleAuth.js';

import { useState } from 'react'
import { useActionState } from 'react';
import {use} from "react";
import { useRouter } from 'next/navigation';

import {FaEye,FaEyeSlash} from "react-icons/fa";

const page = ({params}) => {

  const [visible,setVisible] = useState(false);

  const router = useRouter();

  //we have to resolve these params first using use hook from react;
  const resolvedParams = use(params);
  //we can then destructure slug from resolvedParams;
  const slug = resolvedParams.slug;

  const [state,action,pending] = useActionState(slug === "signup" ? signup : login);

if(slug === "signup" || slug === "login"){

  return <div className="h-screen flex flex-col md:flex-row">

  <section className="relative">
    <h1 className="absolute left-[50%] translate-x-[-50%] top-5 text-[#000000] text-3xl font-poppins">3legant.</h1>
    <img className="h-[60svh] md:h-full w-full object-cover" src="/login_assets/chair.jpg" alt="gray chair with towel on it." />
  </section>

  <section className="mt-8 flex flex-col gap-10 w-[90%] mx-auto pb-5 md:px-10 justify-center max-w-xl">

  <h1 className="text-primaryBlack text-5xl font-poppins">{slug === "signup" ? "Sign Up" : "Sign In"}</h1>
  <p className="text-primaryGray font-inter text-md">Don't have an account yet? <label onClick={()=>{slug === "signup" ? router.push("/register/login") : router.push("/register/signup")}} className="text-primaryGreen cursor-pointer">{slug === "signup" ? "Sign In" : "Sign Up"}</label></p>

  <form className="flex flex-col gap-8" action={action}>
  <div>
  <input className="border-b-2 border-[#E8ECEF] pb-2 font-inter outline-none text-primaryGray w-full" type="text" name="username" placeholder="Username..." />
  {state?.errors?.username?.[0] && <p className='text-red-400'>{state?.errors?.username?.[0]}</p>}
  </div>
  
  {
  slug === "signup" && <div>
   <input name='email' className='border-b-2 border-[#E8ECEF] pb-2 font-inter outline-none text-primaryGray w-full' type="text" placeholder='Email...' />
   {state?.errors?.email?.[0] && <p className='text-red-400'>{state?.errors?.email?.[0]}</p>}
  </div>
  }

  <div>
  <div className="flex border-b-2 border-[#E8ECEF] pb-2 font-inter justify-between">
  <input className='outline-none text-primaryGray w-full' name='password' type={`${visible ? "text" : "password"}`} placeholder="Password..." />
 <p className='text-3xl cursor-pointer' onClick={()=>{setVisible(!visible)}}>
  {visible ? <FaEyeSlash/> : <FaEye />}
 </p>
 </div>   
 {state?.errors?.password?.[0] && <p className='text-red-400'>{state?.errors?.password?.[0]}</p>}
 </div>

 <img onClick={()=>{googleLogin()}} className='w-11 h-11 mx-auto cursor-pointer' src="/login_assets/google.png" alt="google icon" />

 <button className="bg-primaryBlack text-white text-xl font-inter py-4 rounded-lg mt-1">{`${pending ? "Submitting..." : slug === "signup" ? "Sign Up" : "Sign In"}`}</button>

  </form>

  </section>

  </div>
}
}

export default page;
