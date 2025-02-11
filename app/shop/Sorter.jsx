"use client";

import { useState } from "react"

function Sorter() {

 const [showPrice,setShowPrice] = useState(false);

  return (
    <div className="w-full mt-8">
      
    <section className="flex flex-col md:flex-row md:justify-between gap-10 w-[80%] md:w-full mx-auto items-center ">
       
    <div className="w-full md:w-[50%] flex flex-col md:flex-row md:items-center gap-5">
    <div className="flex flex-col gap-2 w-full">
        <label className="text-primaryGray text-md md:hidden font-inter">CATEGORIES:</label>
        <select className="border-2 border-black font-inter outline-none rounded-md w-full p-4 text-primaryBlack cursor-pointer" onChange={(e)=>{console.log(e.target.value)}}>
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
        <img width={9} src="icons/CarretDown.svg" alt="CarretDown Symbol" />
        </div>

    {showPrice && <form className="z-10 absolute top-auto left-0 border-2 border-black p-4 bg-white mt-2 rounded-md w-full">
            <div className="flex flex-col gap-4">
            
            <input className="h-12 rounded pl-4 bg-[#F3F5F7] outline-none text-primaryBlack" type="number" placeholder="From..."  min={0}/>
            
            <input className="h-12 rounded pl-4 bg-[#F3F5F7] outline-none" type="number" placeholder="To..." min={1} />
           
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
