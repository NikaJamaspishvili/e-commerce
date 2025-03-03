'use client';

import { useState } from "react";

function CheckoutForm() {
 
 const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="flex flex-col gap-5 border-b border-primaryGray pb-10">
    <div className={`flex gap-3 border border-primaryGray rounded-sm p-4 ${selectedOption === "option1" && "bg-[#F3F5F7]"}`}><input type="radio" name="choice" className="w-5" onClick={()=>setSelectedOption("option1")}/><p className="font-inter font-semibold text-sm">Pay by Credit Card</p></div>
    <div className={`flex gap-3 border border-primaryGray rounded-sm p-4 ${selectedOption === "option2" && "bg-[#F3F5F7]"}`}><input type="radio" name="choice" className="w-5" onClick={()=>setSelectedOption("option2")}/><p className="font-inter font-semibold text-sm">Paypal</p></div>
    {selectedOption === "option2" && <p className="font-inter font-semibold text-sm text-errorColor">Sorry: Paypal is currently unavailable</p>}
   </div>
  )
}

export default CheckoutForm
