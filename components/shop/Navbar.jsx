"use client";

// icons import
import { FaBars,FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { useRouter,usePathname } from "next/navigation";

import {FetchProfileData} from "@/actions/query/fetchFunctions";
import ImageComponent from "./ImageComponent";

function Navbar() {

 const [data,setData] = useState([]);

  useEffect(()=>{
    async function test(){
      const data = await FetchProfileData();
      setData(data);
      console.log("navbar data is: ",data);
    }

    test();
  },[]);

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

 return <div className="fixed flex w-full flex-col items-center cursor-default bg-white z-20">
 
 {showDiscount && !pathName.startsWith('/elegant/shop') && window.innerWidth > 768 && <div className="md:justify-between w-screen p-3 flex gap-4 items-center justify-center text-[#343839] bg-[#F3F5F7] font-inter font-semibold">
    <div className="flex gap-6 md:mx-auto">
    <img width={30} src="/icons/Discount.svg" alt="Discount icon" />
    <p className="text-lg text-center">50% off storewide — Limited time! </p>
    <p onClick={()=>redirect('shop')} className="hidden md:flex cursor-pointer items-center gap-2 border-b font-inter text-linkColor border-linkColor">Shop Now {<FaArrowRight />}</p>
    </div>  
    <span onClick={()=>setShowDiscount(false)} className="text-3xl cursor-pointer">{<IoMdClose/>}</span>
 </div>}

  <div className="w-[95%] mt-2 flex justify-between items-center p-3">

      <section  className="flex items-center justify-center gap-4">
        <span onClick={()=>setShowMenu(!showMenu)} className={`text-2xl cursor-pointer md:hidden z-20 transition-all duration-300 ease-out ${showMenu ? "rotate-90" : "rotate-0"}`}>{<FaBars />}</span>
        <p className="font-poppins text-3xl z-20 max-xsm:hidden">3elegant.</p>
      </section>

      <section className="hidden md:flex gap-8 text-lg font-spaceGrotesk text-primaryGray">
       <p className="text-primaryBlack cursor-pointer borderBottomAnimation" onClick={()=>redirect('home')}>Home</p>
       <p className="cursor-pointer borderBottomAnimation" onClick={()=>redirect('shop')}>Shop</p>
       <p className="cursor-pointer borderBottomAnimation" onClick={()=>redirect('profile/addproducts')}>Add product</p>
       <p className="cursor-pointer borderBottomAnimation" onClick={()=>redirect('contact')}>Contact us</p>
      </section>
 
      <section className="flex items-center justify-center gap-4">
     <img onClick={()=>redirect('shop/search')} width={25} className="cursor-pointer" src="/icons/Search.svg" alt="search icon" />
     <div className="relative">
     <img onClick={()=>redirect('/elegant/profile')} width={35} className="cursor-pointer" src="/icons/Cart.svg" alt="Cart icon" />
     <p className="text-sm absolute top-0 right-[-4px] bg-primaryBlack text-white rounded-full min-w-4 w-4 h-4 flex items-center justify-center">2</p>
     </div>
     {data?.[0]?.image ? <div onClick={()=>redirect('profile/account')} className="min-w-[50px]"><ImageComponent publicId={data[0].image} imageWidth={35} imageHeight={35} extraClasses="rounded-full cursor-pointer border"/></div> : <img src="/icons/Profile.svg" onClick={()=>redirect('profile/account')} width={35} className="cursor-pointer" alt="Profile icon" />}
      </section>
  </div>

  {showMenu && 
  <div className="fixed left-0 top-0 h-screen p-2  bg-white max-w-[250px] border-r-2 mr-auto w-1/2 flex flex-col justify-center items-center text-center gap-8 text-2xl font-spaceGrotesk text-primaryGray">
       <p onClick={()=>redirect('home')} className="text-primaryBlack cursor-pointer font-light max-sm:text-2xl">Home</p>
       <p onClick={()=>redirect('shop')} className="cursor-pointer font-light max-sm:text-2xl">Shop</p>
       <p onClick={()=>redirect('profile/addproducts')} className="cursor-pointer font-light max-sm:text-2xl">Add product</p>
       <p onClick={()=>redirect('contact')} className="cursor-pointer font-light max-sm:text-2xl">Contact us</p>
  </div>
  }
    
    </div>

}

export default Navbar;
