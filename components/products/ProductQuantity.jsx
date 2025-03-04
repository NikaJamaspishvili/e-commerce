"use client";
import { useState } from "react";
import { useTransition } from "react";
import { insertIntoCart } from "@/actions/query/postFunctions";
import { redirect } from "next/navigation";

function ProductQuantity({isOwner,price,count,productId}) {

 const [pending,startTransition] = useTransition();

 const [quantity,setQuantity] = useState(1);
  
 if(isOwner) return <button onClick={()=>redirect(`/elegant/profile/myproducts`)} className="bg-primaryBlack text-white rounded-lg w-full h-12 font-inter font-medium text-lg">Your Products</button>
 if(!isOwner) return (
    <section className="w-full flex flex-col gap-4 items-start md:border-t md:border-primaryGray pt-6  lg:mt-10 mt-5">
      
      <div className="flex w-full gap-3">
      <div className="flex justify-center bg-[#F5F5F5] rounded-lg p-4 gap-6">
        <img src="/icons/Minus.svg" className="w-7 cursor-pointer" onClick={()=>quantity > 1 && setQuantity(quantity-1)} />
        <p className="font-inter font-semibold text-[#121212] text-2xl">{quantity}</p>
        <img src="/icons/Add.svg" className="w-7 cursor-pointer" onClick={()=>setQuantity(quantity+1)} />      
      </div>
      <p className="font-inter flex justify-center items-center gap-2 font-light text-primaryBlack border-2 border-primaryGreen w-full rounded-lg">Total Price: <span className="font-medium">${quantity*price}</span></p>
      </div>

      {count === 0 && <button onClick={()=>startTransition(async () => await insertIntoCart(productId))} className="bg-primaryBlack text-white rounded-lg w-full h-12 font-inter font-medium text-lg">{pending ? "Adding..." : "Add to Cart"}</button>}
      {count > 0 && <button onClick={()=>redirect(`/elegant/shop/${productId}?cart=true`)} className="bg-primaryBlack text-white rounded-lg w-full h-12 font-inter font-medium text-lg">Go to Cart</button>}
    </section>
  )
}

export default ProductQuantity;
