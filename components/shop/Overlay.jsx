"use client";
import { redirect } from "next/navigation";

function Overlay({productId}) {
  return <div onClick={()=>redirect(`/elegant/shop/${productId}`)} className="absolute cursor-pointer top-0 left-0 w-full h-full bg-transparent"></div>
}

export default Overlay;
