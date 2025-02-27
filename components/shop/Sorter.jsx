"use client";

import { useState } from "react"
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

function Sorter() {

 const router = useRouter(
    {scroll: false}
 );

 const searchParams = useSearchParams();
 const category =searchParams.get('category');
 const price = searchParams.get('price');

 const [showPrice,setShowPrice] = useState(false);

 const [firstInput,setFirstInput] = useState(0);
 const [secondInput,setSecondInput] = useState(0);


 function handleSubmit(e){
    e.preventDefault(); 
    router.push(`?category=${category}&price=${[firstInput,secondInput]}`);
 }

  return (
    <div className="w-full mt-8">
      
    <section className="flex flex-col md:flex-row md:justify-between gap-10 w-[80%] md:w-full mx-auto items-center ">
       
    <div className="w-full md:w-[50%] flex flex-col md:flex-row md:items-center gap-5">
    <div className="flex flex-col gap-2 w-full">
        <label className="text-primaryGray text-md md:hidden font-inter">CATEGORIES:</label>
        <select className="border-2 border-black font-inter outline-none rounded-md w-full p-4 text-primaryBlack cursor-pointer" onChange={(e)=>{router.push(`?category=${e.target.value}&price=${price}`)}}>
            <option value="living-room">Living Room</option>
            <option value="bedroom">Bedroom</option>
            <option value="dining-room">Dining Room</option>
            <option value="kitchen">Kitchen</option>
            <option value="bathroom">Bathroom</option>
        </select>
    </div>

    <div className="relative border-2 border-black cursor-pointer w-full rounded-md">
        
        <div className="flex justify-between py-4 pl-4 pr-1" onClick={()=>{setShowPrice(!showPrice)}}>
        <h1 className="font-inter">All Price</h1>
        <img width={9} src="/icons/CarretDown.svg" alt="CarretDown Symbol" />
        </div>

    {showPrice && <form onSubmit={handleSubmit} className="z-10 absolute top-auto left-0 border-2 border-black p-4 bg-white mt-2 rounded-md w-full">
            <div className="flex flex-col gap-4">
            
            <input onChange={(e)=>setFirstInput(e.target.value)} required className="h-12 rounded pl-4 bg-[#F3F5F7] outline-none text-primaryBlack" type="number" placeholder="Min"  min={10}/>
            
            <input onChange={(e)=>setSecondInput(e.target.value)} className="h-12 rounded pl-4 bg-[#F3F5F7] outline-none" type="number" placeholder="Max" min={Number(firstInput) + 1} />
           
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

    <select className="flex gap-2 border-t-2 border-b-2 p-3 cursor-pointer font-inter font-semibold outline-none md:border-none">
        <option value="Lower-to-Higher">Lower to Higher Price</option>
        <option value="Higher-to-Lower">Higher to Lower Price</option>
    </select>

    </section>

    </div>
  )
}

export default Sorter;
