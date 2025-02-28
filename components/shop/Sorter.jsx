"use client";

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import { validatePrice } from "@/config/schema";
import { useTransition } from "react";

function Sorter() {

 const router = useRouter();

 const searchParams = useSearchParams();
 const category =searchParams.get('category');
 const price = searchParams.get('price');

 let array = [
    {name:"Bedroom",value:"bedroom"},
    {name:"Living Room",value:"living-room"},
    {name:"Kitchen",value:"kitchen"},
    {name:"Dining Room",value:"dining-room"},
    {name:"Bathroom",value:"bathroom"},
    {name:"Storage Room",value:"storage-room"}
 ];

 const [showPrice,setShowPrice] = useState(false);
 const [inputCategoryArray,setInputCategoryArray] = useState([]);

 const [firstInput,setFirstInput] = useState(0);
 const [secondInput,setSecondInput] = useState(0);

 function handleSubmit(e){
    e.preventDefault(); 
    router.push(`?category=${category}&price=${[firstInput,secondInput]}`,{scroll:false});
    setShowPrice(false);
 }

  function handleCategory(){
    const index = array.findIndex(obj => obj.value === category);
    // If the object is found
    if (index !== -1) {
      // Remove the object from the array
      const [element] = array.splice(index, 1); 
      
      // Insert the object at the first position
      array.unshift(element);
      setInputCategoryArray(array);
    }else{
        setInputCategoryArray(array);
    }
}

function handlePrice(){
    let validateResult = validatePrice.safeParse({
        price: price,
    });

    if(validateResult.success){
        const array = price.split(',');
        setFirstInput(array[0]);
        setSecondInput(array[1]);
    }
}

useEffect(()=>{

    if(category && category !== 'null'){
     handleCategory();
    }else{
        setInputCategoryArray(array);
    }

    if(price && price !== 'null'){
        handlePrice();
    }

},[]);

  return (
    <div className="w-full mt-8">
      
    <section className="flex flex-col md:flex-row md:justify-between gap-10 w-[80%] md:w-full mx-auto items-center ">
       
    <div className="w-full md:w-[50%] flex flex-col md:flex-row md:items-center gap-5">
    <div className="flex flex-col gap-2 w-full">
        <label className="text-primaryGray text-md md:hidden font-inter">CATEGORIES:</label>
        <select className="border-2 border-black font-inter outline-none rounded-md w-full p-4 text-primaryBlack cursor-pointer" onChange={(e)=>{router.push(`?category=${e.target.value}&price=${price}`,{scroll:false})}}>
            {inputCategoryArray.map((result,index)=>{
             return <option key={index} value={result.value}>{result.name}</option>
            })}
        </select>
    </div>

    <div className="relative border-2 border-black cursor-pointer w-full rounded-md">
        
        <div className="flex justify-between py-4 pl-4 pr-1" onClick={()=>{setShowPrice(!showPrice)}}>
        <h1 className="font-inter">All Price</h1>
        <img width={9} src="/icons/CarretDown.svg" alt="CarretDown Symbol" />
        </div>

    {showPrice && <form onSubmit={handleSubmit} className="z-10 absolute top-auto left-0 border-2 border-black p-4 bg-white mt-2 rounded-md w-full">
            <div className="flex flex-col gap-4">
            
            <input onChange={(e)=>setFirstInput(e.target.value)} required className="h-12 rounded pl-4 bg-[#F3F5F7] outline-none text-primaryBlack font-light" type="number" placeholder="Min"  min={10}/>
            
            <input onChange={(e)=>setSecondInput(e.target.value)} className="h-12 rounded pl-4 bg-[#F3F5F7] outline-none font-light"  type="number" placeholder="Max" min={Number(firstInput) + 1} />
           
            </div>
           <div className="flex flex-col gap-2 mt-4">
            <p className="text-primaryGray font-inter font-light">Min: <span className="font-bold text-primaryBlack">{firstInput > 0 ? firstInput + '$': 0}</span></p>
            <p className="text-primaryGray font-inter font-light gap-1">Max: <span className="font-bold text-primaryBlack">{secondInput > 0 ? secondInput + '$' : '\u221E'}</span></p> 
           </div>
            <button className="mt-4 w-full rounded-md p-3 font-inter text-white bg-primaryGreen">Apply</button>
        </form>
    }
    </div>
    </div>

    <select onChange={(e)=>router.push(`?category=${category}&price=${price}&filterprice=${e.target.value}`,{scroll:false})} className="flex gap-2 border-t-2 border-b-2 p-3 cursor-pointer font-inter font-semibold outline-none md:border-none">
        <option value="ascending">Lower to Higher Price</option>
        <option value="descending">Higher to Lower Price</option>
    </select>

    </section>

    </div>
  )
}

export default Sorter;
