"use client";

import { login } from './(components)/authenticate.js';

import { useState } from 'react'
import { useActionState } from 'react';

import {FaEye,FaEyeSlash} from "react-icons/fa";

const page = () => {

  const [visible,setVisible] = useState(false);

  const [state,action,pending] = useActionState(login);

  return <div className="h-screen flex flex-col md:flex-row">

  <section className="relative">
    <h1 className="absolute left-[50%] translate-x-[-50%] top-5 text-[#000000] text-3xl font-poppins">3legant.</h1>
    <img className="h-[60svh] md:h-full w-full object-cover" src="/login_assets/chair.jpg" alt="gray chair with towel on it." />
  </section>

  <section className="mt-8 flex flex-col gap-10 w-[90%] mx-auto pb-5 md:px-10 justify-center max-w-xl">

  <h1 className="text-primaryBlack text-5xl font-poppins">Sign in</h1>
  <p className="text-primaryGray font-inter text-md">Don't have an account yet? <label className="text-primaryGreen">Sign Up</label></p>

  <form className="flex flex-col gap-8" action={action}>
  
  <div>
  <input className="border-b-2 border-[#E8ECEF] pb-2 font-inter outline-none text-primaryGray w-full" type="text" name="email" placeholder="Username or email" />
  {state?.errors?.email?.[0] && <p className='text-red-400'>{state?.errors?.email?.[0]}</p>}
  </div>
  
  <div>
  <div className="flex border-b-2 border-[#E8ECEF] pb-2 font-inter justify-between">
  <input className='outline-none text-primaryGray w-full' name='password' type={`${visible ? "text" : "password"}`} placeholder="Password" />
 <p className='text-3xl cursor-pointer' onClick={()=>{setVisible(!visible)}}>
  {visible ? <FaEyeSlash/> : <FaEye />}
 </p>
 </div>   
 {state?.errors?.password?.[0] && <p className='text-red-400'>{state?.errors?.password?.[0]}</p>}
 </div>

 <button className="bg-primaryBlack text-white text-xl font-inter py-4 rounded-lg mt-1">{`${pending ? "Submitting..." : "Sign In"}`}</button>

  </form>

  </section>

  </div>
}

export default page;
