"use client";

import { FaPlus } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { useEffect,useTransition,useState } from "react";
import { CldImage } from 'next-cloudinary';


import { FetchProductsData } from "@/actions/query/fetchFunctions";
import { deleteProduct } from "@/actions/query/deleteFunctions";
import Loader from "../reusable/Loader";

function Products() {

 const [isPending,startTransition] = useTransition();

 const [data,setData] = useState([]); 

 let router = useRouter();

 useEffect(()=>{

  startTransition(async ()=>{
    let result = await FetchProductsData();
    console.log(result);
    setData(result);
  })
  
 },[]);

 async function handleDeleteButton(id,arrayId){

  let array = [...data];
  array = array.filter(result => result.id !== id);
  setData(array);

  let result = await deleteProduct(id,arrayId);
  // console.log(result);
 }

 if(isPending){
  return <Loader />
 }

 if(data.length === 0){
  return <div>
    <h1 className="text-center font-inter font-semibold text-2xl">You have no products</h1>
  </div>
 }
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
         {data.map((result,index)=>{
          return <tr key={index} className="mt-2 text-left text-primaryBlack font-inter border-b-2 border-[#E8ECEF]">
          <td className="py-6 font-light flex gap-3">
            <CldImage onClick={()=>{router.push(`/elegant/shop/${result.id}`)}} priority className="w-auto h-auto cursor-pointer" width={100} height={100} crop={"auto"} src={JSON.parse(result.photos)?.[0]} alt={result.name} />
            <div className="flex flex-col gap-3 ">
            <p className="font-semibold">{result.name}</p>
           {console.log(result.category)}
            <section className="flex flex-col gap-2">
             {(result.category).map((result,index)=>{
                return <p key={index} className="text-sm break-all">{result}</p>
              })}
            </section>

            </div>
          </td>
            <td className="py-6 font-light">{result.price}$</td>
            <td className="py-6 font-light">
              <button className="px-10 py-3 rounded-xl bg-red-500 text-white" onClick={()=>handleDeleteButton(result.id,result.photos)}>Delete</button>
            </td>
          </tr>
         })}
        </tbody>
      </table>
      </div>


     : <section className="mt-10 w-full">
        <p className="border-b-2 font-inter font-light text-primaryGray pl-10 pb-2 text-lg tracking-wider">Product</p>

       <section className="w-full flex flex-col gap-16 mt-7">
        {data.map((result,index)=>{
        return <div key={index} className="w-full flex flex-col gap-6 font-inter">

         <div className="w-full flex gap-5 items-start">
         <CldImage onClick={()=>{router.push(`/elegant/shop/${result.id}`)}} priority className="w-auto h-auto cursor-pointer" width="100" height="600" src={JSON.parse(result.photos)?.[0]} alt={result.name} />
         <div className="flex flex-col gap-3 w-full">
          <p className="font-semibold">{result.name}</p>
          {(result.category).map((result,index)=>{
          return <p key={index} className="font-light break-all text-sm text-primaryGray">{result},</p>
          })}
          <p className="mt-2 text-primaryBlack font-light">{result.price}$</p>
          </div>
         </div> 

         <button onClick={()=>handleDeleteButton(result.id,result.photos)} className="py-3 rounded-xl bg-red-500 text-white">Delete</button>
          </div>
        })}
        </section>
      </section>
}
    </div>
  )
}

export default Products;
