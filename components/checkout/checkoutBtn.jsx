"use client";

import {redirect} from "next/navigation"
import { useEffect } from "react";
function CheckoutBtn() {

  useEffect(()=>{
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  },[])

  return <button onClick={()=>redirect("/elegant/profile/orders")} className="font-inter font-medium text-white bg-primaryBlack rounded-3xl p-3 w-full max-w-[200px] mt-5">Purchase history</button>
}

export default CheckoutBtn;
