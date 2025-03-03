"use client";

import {redirect} from "next/navigation"

function CheckoutBtn() {
  return <button onClick={()=>redirect("/elegant/profile/orders")} className="font-inter font-medium text-white bg-primaryBlack rounded-3xl p-3 w-full max-w-[200px] mt-5">Purchase history</button>
}

export default CheckoutBtn;
