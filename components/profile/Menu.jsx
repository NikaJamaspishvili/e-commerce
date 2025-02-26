"use client";
import { redirect } from 'next/navigation';
import { useEffect, useRef,useTransition } from 'react';

import { updateProfileImage } from '@/actions/query/postFunctions';
import { reduceImageSize } from "@/actions/other/compressImage";
import Loader from '../reusable/Loader';
import {CldImage} from "next-cloudinary";


function Menu({value,data}) {

 const [isPending,startTransition] = useTransition();

function handleUpload(file,previousImageId){
 if(file){
 startTransition(async()=>{
  let compressedFile = await reduceImageSize(file);
  let result = await updateProfileImage(compressedFile,previousImageId);
  // console.log('frontend result:',result);
 })
}
}
   
 let btnUploaderRef = useRef();

  const array = [
    { value: "account", label: "Account" },
    { value: "orders", label: "Orders" },
    { value: "myproducts", label: "My Products" },
    { value: "logout", label: "Log Out" },
  ];

  const sortedArray = array.sort((a)=>{
    return a.value === value ? -1 : 1;
  })

  return (
      <div className="bg-[#F3F5F7] md:h-full flex flex-col items-center text-center mt-10 md:mt-0 p-16 md:p-5 rounded-lg md:w-1/2 md:max-w-[260px] md:gap-7">
       <div className="text-center flex flex-col items-center">
         <section onClick={()=>btnUploaderRef.current.click()} className=" relative cursor-pointer hover:before:flex before:font-inter before:hidden before:tracking-wider before:bg-primaryBlack/50 backdrop-blur-lg before:text-white before:items-center before:justify-center before:w-full before:left-0 before:rounded-full before:h-full before:content-['EDIT'] before:absolute">
         {isPending ? <Loader /> : <>
          {data && data[0].image ? <CldImage width={100} height={100} crop={"auto"} priority className="w-auto h-auto rounded-full" src={data[0].image} alt={`${data && data[0].username}`} /> : <img className='w-[100px] h-[100px] rounded-full' src="/icons/Profile.svg" alt="profile icon" />}
          <img className="absolute right-0 bottom-0" src="/icons/Camera.svg" alt="camera icon"/>
          </>
         }
          <input type="file" accept='image/*' ref={btnUploaderRef} onChange={(e)=>handleUpload(e.target.files[0],data && data[0].image)} hidden />  {/* this input is hidden and is used in order to upload profile photo */}
         </section>
         <h1 className="font-inter font-semibold text-lg tracking-wider mt-3">{data && data[0].username}</h1>
       </div>
 
       <select onChange={(e)=>{redirect('/elegant/profile/'+e.target.value)}} className="md:hidden font-inter font-semibold text-sm p-3 rounded-lg border-2 text-primaryBlack border-primaryGray w-full mt-8">
        {sortedArray.map((result)=>{
        return <option key={result.value} value={result.value}>
          {result.label}
        </option>
        })}
       </select>
 
       <div className="md:flex md:items-start w-full hidden flex-col font-inter font-semibold text-primaryGray gap-4 text-start">
        <p onClick={()=>redirect('/elegant/profile/account')} className={`${value === "account" && "border-b border-primaryBlack text-primaryBlack"} cursor-pointer pb-2 w-full`}>Account</p>
        <p onClick={()=>redirect('/elegant/profile/orders')}className={`${value === "orders" && "border-b border-primaryBlack text-primaryBlack"} cursor-pointer pb-2 w-full`}>Orders</p>
        <p onClick={()=>redirect('/elegant/profile/myproducts')} className={`${value === "myproducts" && "border-b border-primaryBlack text-primaryBlack"} cursor-pointer pb-2 w-full`}>My Products</p>
        <p onClick={()=>redirect('/elegant/profile/logout')} className={`${value === "logout" && "border-b border-errorColor text-errorColor"} cursor-pointer pb-2 w-full`}>Log Out</p>
       </div>
 
     </div>
  )
}

export default Menu
