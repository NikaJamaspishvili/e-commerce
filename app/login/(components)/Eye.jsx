"use client";

import { useState } from 'react'
import {FaEye,FaEyeSlash} from "react-icons/fa";

function Eye() {

 const [visible,setVisible] = useState(false);

  return (

    <div className="flex border-b-2 border-[#E8ECEF] pb-2 font-inter justify-between">
    <input className='outline-none text-primaryGray w-full' name='password' type={`${visible ? "text" : "password"}`} placeholder="Password" />
    <p className='text-3xl cursor-pointer' onClick={()=>{setVisible(!visible)}}>
      {visible ? <FaEyeSlash/> : <FaEye />}
    </p>
  </div>

  )
}

export default Eye;
