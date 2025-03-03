"use client";

import { useState } from "react";

import ImageComponent from "../shop/ImageComponent";

import { FaArrowLeft,FaArrowRight } from "react-icons/fa";

function LeftSide({condition,photos}) {
 
 const [count,setCount] = useState(0);

 let parsedPhotos = JSON.parse(photos);

  return <section className="flex justify-center w-full relative">
      <section className="absolute top-3 left-3 z-10 flex flex-col gap-2">
      <h1 className="flex justify-center items-center font-inter font-bold text-lg rounded-md bg-white text-[#121212]">{condition.toUpperCase()}</h1>
      <h2 className="w-20 h-8 rounded-md space tracking-wider font-inter font-semibold bg-primaryGreen text-[#FEFEFE] flex items-center justify-center">-50%</h2>
     </section>
      {parsedPhotos.length > 1 && <FaArrowLeft onClick={()=>count > 0 ? setCount(count-1) : setCount(parsedPhotos.length-1)} className="cursor-pointer bg-white rounded-full h-[50px] w-[50px] p-3 text-primaryGray  block absolute md:block left-3 top-1/2" src="/icons/ArrowLeftBtn.svg" alt="arrow left button" />}
        <div className="flex">
        {parsedPhotos.map((publicId,index) => {
          if(index === count) return <ImageComponent key={index} publicId={publicId} imageWidth={450} imageHeight={450}/>
        })}
        </div>
      {parsedPhotos.length > 1 && <FaArrowRight onClick={()=>count < parsedPhotos.length-1 ? setCount(count+1): setCount(0)} className="cursor-pointer bg-white rounded-full h-[50px] w-[50px] p-3 text-primaryGray  block absolute md:block right-3 top-1/2" src="/icons/ArrowRightBtn.svg" alt="arrow right button" />}
      </section>
}

export default LeftSide
