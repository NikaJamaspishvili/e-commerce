"use client";
import { useState } from "react";

function ProductQuantity({price}) {

 const [quantity,setQuantity] = useState(1);

  return (
    <section className="w-full flex flex-col gap-4 items-start md:border-t md:border-primaryGray pt-6 max-w-[500px] mt-10">
      
      <div className="flex w-full gap-3">
      <div className="flex justify-center bg-[#F5F5F5] rounded-lg p-4 gap-6">
        <img src="/icons/Minus.svg" className="w-7 cursor-pointer" onClick={()=>quantity > 1 && setQuantity(quantity-1)} />
        <p className="font-inter font-semibold text-[#121212] text-2xl">{quantity}</p>
        <img src="/icons/Add.svg" className="w-7 cursor-pointer" onClick={()=>setQuantity(quantity+1)} />      
      </div>
      <p className="font-inter flex justify-center items-center gap-2 font-light text-primaryBlack border-2 border-primaryGray w-full rounded-lg">Total Price: <span className="font-medium">${quantity*price}</span></p>
      </div>

      <button className="bg-primaryBlack text-white rounded-lg w-full h-12 font-inter font-medium text-lg">Add to Cart</button>
    </section>
  )
}

export default ProductQuantity;
