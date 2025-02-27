"use client";

// icons import
import { FaBars,FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

function Navbar() {

 const [showDiscount,setShowDiscount] = useState(true);
 const [showMenu,setShowMenu] = useState(false);

 const router = useRouter();
 const pathName = usePathname();

 function redirect(route){
    router.push('/elegant/'+route);
    if(showMenu){
      setShowMenu(false);
   }
 }

 return <div className="fixed flex w-full flex-col items-center cursor-default bg-white z-10">
 
 {showDiscount && !pathName.startsWith('/elegant/shop') && <div className="md:justify-between w-screen p-3 flex gap-4 items-center justify-center text-[#343839] bg-[#F3F5F7] font-inter font-semibold">
    <div className="flex gap-6 md:mx-auto">
    <img width={30} src="/icons/Discount.svg" alt="Discount icon" />
    <p className="text-lg text-center">30% off storewide — Limited time! </p>
    <p onClick={()=>redirect('shop')} className="hidden md:flex cursor-pointer items-center gap-2 border-b font-inter text-linkColor border-linkColor">Shop Now {<FaArrowRight />}</p>
    </div>  
    <span onClick={()=>setShowDiscount(false)} className="text-3xl cursor-pointer">{<IoMdClose/>}</span>
 </div>}

 <div className="w-[95%] mt-2 flex justify-between items-center p-3">

      <section className="flex items-center justify-center gap-4">
        <span onClick={()=>setShowMenu(!showMenu)} className={`text-2xl cursor-pointer md:hidden ${showMenu && "animate-spin"}`}>{<FaBars />}</span>
        <p className="font-poppins text-3xl">3elegant.</p>
      </section>

      <section className="hidden md:flex gap-8 text-lg font-spaceGrotesk text-primaryGray">
       <p className="text-primaryBlack cursor-pointer borderBottomAnimation" onClick={()=>redirect('home')}>Home</p>
       <p className="cursor-pointer borderBottomAnimation" onClick={()=>redirect('shop')}>Shop</p>
       <p className="cursor-pointer borderBottomAnimation" onClick={()=>redirect('profile/addproducts')}>Add product</p>
       <p className="cursor-pointer borderBottomAnimation" onClick={()=>redirect('contact')}>Contact us</p>
      </section>
 
      <section className="flex items-center justify-center gap-2">
     <img onClick={()=>redirect('shop/search')} width={25} className="hidden md:block cursor-pointer mr-3" src="/icons/Search.svg" alt="search icon" />
     <img onClick={()=>redirect('profile/account')} width={25} className="hidden mr-3 cursor-pointer md:block" src="/icons/Profile.svg" alt="Profile Image" />
     <img onClick={()=>redirect('shop/cart')} width={30} className="cursor-pointer" src="/icons/Cart.svg" alt="Cart icon" />
     <p className="text-md bg-primaryBlack text-white rounded-full w-6 h-6 flex items-center justify-center">2</p>
      </section>
  </div>

  {showMenu && 
  <div className="mt-8 border-t-2 border-b-2 w-full py-8 flex flex-col text-center items-center gap-10 text-4xl font-spaceGrotesk text-primaryGray">
       <p onClick={()=>redirect('home')} className="text-primaryBlack cursor-pointer">Home</p>
       <p onClick={()=>redirect('shop')} className="cursor-pointer">Shop</p>
       <p onClick={()=>redirect('profile/addproducts')} className="cursor-pointer">Add product</p>
       <p onClick={()=>redirect('contact')} className="cursor-pointer">Contact us</p>
       <section className="flex gap-8 text-5xl text-primaryBlack">
       <img onClick={()=>redirect('shop/search')} width={50} className="cursor-pointer mr-3" src="/icons/Search.svg" alt="search icon" />
       <img width={50} onClick={()=>redirect('profile/account')} className="mr-3 cursor-pointer" src="/icons/Profile.svg" alt="Profile Image" />
       </section>
  </div>
  }
    
    </div>

}

export default Navbar;
