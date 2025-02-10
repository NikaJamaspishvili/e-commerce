"use client";

import { FaBars,FaCartArrowDown,FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { LuTicketPercent } from "react-icons/lu";

import { useState } from "react";

function Navbar() {

 const [showDiscount,setShowDiscount] = useState(true);

 return <div className="fixed flex w-screen flex-col items-center cursor-default">
 
 {showDiscount &&<div className="md:justify-between w-screen p-3 flex gap-4 items-center justify-center text-[#343839] bg-[#F3F5F7] font-inter font-semibold">
    <div className="flex gap-6 md:mx-auto">
    <span className="text-3xl">{<LuTicketPercent />}</span>
    <p className="text-lg text-center">30% off storewide — Limited time! </p>
    <p className="hidden md:flex cursor-pointer items-center gap-2 border-b font-inter text-linkColor border-linkColor">Shop Now {<FaArrowRight />}</p>
    </div>  
    <span onClick={()=>setShowDiscount(false)} className="text-3xl cursor-pointer">{<IoMdClose/>}</span>
 </div>}

 <div className="w-[95%] mt-2 flex justify-between items-center p-3">

      <section className="flex items-center justify-center gap-4">
        <span className="text-xl cursor-pointer">{<FaBars />}</span>
        <p className="font-poppins text-3xl">3elegant.</p>
      </section>

      <section className="hidden md:visible">
    <p>Home</p>
    <p>Shop</p>
    <p>Product</p>
    <p>Contact us</p>
      </section>
 
      <section className="flex items-center justify-center gap-2">
     <span className="text-3xl cursor-pointer">{<FaCartArrowDown />}</span>
     <p className="text-md bg-primaryBlack text-white rounded-full w-6 h-6 flex items-center justify-center">2</p>
      </section>
  </div>
    
    </div>

}

export default Navbar;
