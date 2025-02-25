"use client";

import { FaPlus } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { useActionState, useEffect,useRef } from "react";

import { FetchProductsData } from "@/actions/query/fetchFunctions";

function Products() {

 const [state,action,isPending] = useActionState(FetchProductsData,null);


 let btnRef = useRef(); 
 let router = useRouter();

 useActionState(()=>{
   btnRef.current.click();
 },[]);


 let array = [
  {name:"Tray table",categories:["Bedroom","LivingRoom"],img:"/login_assets/chair.jpg",price:"$19.19"},
  {name:"Tray table",categories:["Bedroom","LivingRoom"],img:"/login_assets/chair.jpg",price:"$19.19"},
  {name:"Tray table",categories:["Bedroom","LivingRoom"],img:"/login_assets/chair.jpg",price:"$19.19"},
  {name:"Tray table",categories:["Bedroom","LivingRoom"],img:"/login_assets/chair.jpg",price:"$19.19"},
  {name:"Tray table",categories:["Bedroom","LivingRoom"],img:"/login_assets/chair.jpg",price:"$19.19"},
 ]

  return (
    <div className="w-full mt-10 md:mt-0">
      <div className="flex w-full justify-between items-center">
      <h1 className="font-inter font-semibold md:text-2xl text-3xl  text-[#000000]">My Products</h1>
      <label onClick={()=>{router.push('/elegant/profile/addproducts')}} className="text-2xl text-white p-2 rounded-full bg-primaryGreen cursor-pointer"><FaPlus /></label>
      </div>
     {window.innerWidth > 1024 ? <div className="w-full mt-10">
       <table className="w-full table-fixed">
        <thead>
        <tr className="border-b-2 border-[#E8ECEF] text-primaryGray text-left">
          <th className="pb-2 font-light w-1/2">Product</th>
          <th className="pb-2 font-light">Price</th>
          <th className="py-2 font-light">Action</th>
        </tr>
        </thead>

        <tbody>
         {array.map((result,index)=>{
          return <tr key={index} className="mt-2 text-left text-primaryBlack font-inter border-b-2 border-[#E8ECEF]">
          <td className="py-6 font-light flex gap-3">
            <img className="w-[100px] h-[100px] rounded" src={result.img} alt={result.name} />
            <div className="flex flex-col gap-3 ">
            <p className="font-semibold">{result.name}</p>
           
            <section className="flex flex-col gap-2">
             {result.categories.map((result,index)=>{
                return <p key={index} className="text-sm break-all">{result}</p>
              })}
            </section>

            </div>
          </td>
            <td className="py-6 font-light">{result.price}</td>
            <td className="py-6 font-light">
              <button className="px-10 py-3 rounded-xl bg-red-500 text-white">Delete</button>
            </td>
          </tr>
         })}
        </tbody>
      </table>
      </div>


     : <section className="mt-10 w-full">
        <p className="border-b-2 font-inter font-light text-primaryGray pl-10 pb-2 text-lg tracking-wider">Product</p>

       <section className="w-full flex flex-col gap-16 mt-7">
        {array.map((result,index)=>{
        return <div key={index} className="w-full flex flex-col gap-6 font-inter">

         <div className="w-full flex gap-5 items-start">
          <img className="w-[100px]" src={result.img} alt={result.name} />
          <div className="flex flex-col gap-3 w-full">
          <p className="font-semibold">{result.name}</p>
          {result.categories.map((result,index)=>{
          return <p key={index} className="font-light break-all text-sm text-primaryGray">{result},</p>
          })}
          <p className="mt-2 text-primaryBlack font-light">{result.price}</p>
          </div>
         </div> 

         <button className="py-3 rounded-xl bg-red-500 text-white">Delete</button>
          </div>
        })}
        </section>
        <button ref={btnRef} onClick={action} hidden>Submit Button</button> 
      </section>
}
    </div>
  )
}

export default Products;
