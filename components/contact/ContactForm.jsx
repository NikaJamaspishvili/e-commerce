"use client";

import {  useEffect,useState } from "react";
import Loader from "../reusable/Loader";

import { FaCheck } from "react-icons/fa";

function ContactForm() {

const [messageStatus,setMessageStatus] = useState('start');
const [message,setMessage] = useState('');

useEffect(()=>{
 let timer;
 console.log(messageStatus);

 if(messageStatus === "loading"){
  timer = setTimeout(()=>{
    setMessageStatus('success');
  },4000);
 }else if(messageStatus === "success"){
  timer = setTimeout(()=>{
    setMessageStatus("start");
  },3000);
 }

 return ()=>clearTimeout(timer);

},[messageStatus]);


  return (
    <form onSubmit={(e)=>{e.preventDefault(); setMessageStatus('loading'); setMessage('')}} className="flex flex-col order-2 md:order-1 w-full md:w-1/2 self-center gap-2">
    <p className="text-primaryGray font-inter font-bold text-sm">MESSAGE</p>
    <textarea value={message} onChange={(e)=>setMessage(e.target.value)} type="text" required placeholder="Your MessageStatus" className="border-[#CBCBCB] border-2 rounded-lg p-3 w-full text-primaryGray min-h-[150px] md:min-h-[350px] outline-none"/>
    <button className={`${messageStatus === "success" ? 'bg-primaryGreen' : "bg-primaryBlack"} font-inter font-medium text-white rounded-lg p-3 w-[200px] mx-auto mt-3 flex justify-center`}>{messageStatus === "loading" ? <Loader /> : messageStatus === "start" ? "Send Message" : messageStatus === "success" && <FaCheck className="text-2xl"/>}</button>
    </form>
  )
}

export default ContactForm
