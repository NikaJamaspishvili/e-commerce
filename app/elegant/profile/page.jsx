"use client";

import { lazy,Suspense } from "react";
import { useState } from "react";

import Loader from "@/components/loader/Loader";
import Products from "@/components/profile/Products";

const Account = lazy(()=>import('@/components/profile/Account'));
const Orders = lazy(()=>import('@/components/profile/Orders'));
const Prdocuts = lazy(()=>import('@/components/profile/Products'));

const page = () => {

  const [value,setValue] = useState('Account');

  return (
    <div className="pt-40 max-w-[500px] mx-auto md:max-w-none md:mx-0">
      <h1 className="text-center font-poppins text-4xl md:text-5xl">My Account</h1>
      <section className="w-5/6 mx-auto md:flex md:gap-16 md:mt-16">

     <div className="bg-[#F3F5F7] flex flex-col items-center text-center mt-10 md:mt-0 p-16 md:p-5 rounded-lg md:w-1/2 md:max-w-[260px] md:gap-7">
       
      <div className="text-center flex flex-col items-center">
        <section className="relative">
         <img className="w-[100px] h-[100px] rounded-full" src="/login_assets/chair.jpg" alt="profile image" />
         <img className="absolute right-0 bottom-0" src="/icons/Camera.svg" alt="camera icon" />
        </section>
        <h1 className="font-inter font-semibold text-lg tracking-wider mt-3">Sofia Havertz</h1>
      </div>

      <select onChange={(e)=>setValue(e.target.value)} className="md:hidden font-inter font-semibold text-sm p-3 rounded-lg border-2 text-primaryBlack border-primaryGray w-full mt-8">
        <option value="Account">Account</option>
        <option value="Orders">Orders</option>
        <option value="MyProducts">My Products</option>
        <option value="LogOut">Log Out</option>
      </select>

      <div className="md:flex md:items-start w-full hidden flex-col font-inter font-semibold text-primaryGray gap-4 text-start">
        <p className={`${value === "Account" && "border-b border-primaryBlack text-primaryBlack"} cursor-pointer w-full pb-2`} onClick={()=>setValue('Account')}>Account</p>
        <p className={`${value === "Orders" && "border-b border-primaryBlack text-primaryBlack"} cursor-pointer w-full pb-2`} onClick={()=>setValue('Orders')}>Orders</p>
        <p className={`${value === "MyProducts" && "border-b border-primaryBlack text-primaryBlack"} cursor-pointer w-full pb-2`} onClick={()=>setValue('MyProducts')}>My Products</p>
        <p className={`${value === "LogOut" && "border-b border-primaryBlack text-primaryBlack"} cursor-pointer w-full pb-2`} onClick={()=>setValue('LogOut')}>Log Out</p>
      </div>

    </div>

    <Suspense fallback={<Loader />}>
          {value === "Account" && <Account />}
          {value === "Orders" && <Orders />}
          {value === "MyProducts" && <Products />}
    </Suspense>

      </section>
    </div>
  )
}

export default page;
