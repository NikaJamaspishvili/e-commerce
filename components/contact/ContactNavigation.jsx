"use client";
import { FaCaretRight } from "react-icons/fa";
import { redirect } from "next/navigation";

function ContactNavigation() {


  let fullPath = localStorage.getItem('prevPath');
  let path = fullPath.split("/").pop();
  if(path === "contact") return null;

  return (
    <div className="font-inter font-medium text-[#605F5F] text-sm flex gap-1 items-center">
        <p onClick={()=>redirect(fullPath)} className="cursor-pointer">{path}</p>
        <FaCaretRight />
        <p className="text-[#121212]">Contact Us</p>
    </div>
  )
}

export default ContactNavigation
