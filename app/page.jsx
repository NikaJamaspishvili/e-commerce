"use client";

import {Swiper,SwiperSlide} from "swiper/react";
import { Pagination,Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FaArrowRight,FaCheck,FaEnvelope } from "react-icons/fa";

import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";

import dynamic from "next/dynamic";
import Footer from "@/components/shop/Footer";
import Loader from "@/components/reusable/Loader";

const Navbar = dynamic(()=> import("@/components/shop/Navbar"),{ssr:false});

function page() {

 const [formState,setFormState] = useState('');
 const [inputValue,setInputValue] = useState('');
 
 const router = useRouter();

 useEffect(()=>{
    
    if(formState === "loading"){
        let timer1 = setTimeout(()=>{
            setFormState('check');
            setInputValue('');
        },3000);

        return ()=> clearTimeout(timer1);

    }else if(formState === "check"){
        let timer2 = setTimeout(()=>{
            setFormState('');
        },3000);

        return ()=> clearTimeout(timer2);
    }

 },[formState]);

  return (
    <div className="w-screen absolute left-0 top-0">
        <Navbar isRegistered={false}/>

        <div className="mt-32 flex flex-col gap-12 w-[80%] mx-auto max-w-[1500px]">
            <section>
            <Swiper slidesPerView={1} pagination={{clickable: true}} navigation  modules={[Pagination, Navigation]}>
                <SwiperSlide><img src="/home/bedroom.jpg" className="w-full h-100"/></SwiperSlide>
                <SwiperSlide><img src="/home/kitchen.jpg" className="w-full h-100"/></SwiperSlide>
                <SwiperSlide><img src="/home/bathroom.jpg" className="w-full"/></SwiperSlide>
            </Swiper>
            </section>

            <section className="flex flex-col gap-5 md:gap-10 md:flex-row md:justify-between md:items-center">
                <h1 className="font-poppins font-medium text-5xl md:max-w-[400px]">Simply Unique <span className="text-primaryGray">/</span> Simply Better.</h1>
                <p className="text-primaryGray font-inter font-light text-md md:text-lg max-w-[400px]"><span className="text-[#343839] font-semibold font-inter">3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
            </section>

            <section className="flex flex-col gap-5 md:flex-row">
                <div className="bg-[#F3F5F7] p-8 flex flex-col md:flex-row md:w-1/2">
                    <div className="flex flex-col">
                    <h1 className="font-poppins font-medium text-primaryBlack text-xl">Living Room</h1>
                    <button onClick={()=>router.push('/elegant/shop?category=living-room&price=null')} className="font-inter w-[95px] font-medium text-primaryBlack text-sm flex items-center gap-2 border-b border-primaryBlack mt-2">Shop Now <FaArrowRight /></button>
                    </div>
                    <img src="/home/chair.png" className="md:w-4/5" alt="chair image transparent" />
                </div>

                <section className="flex flex-col gap-5 md:w-1/2">
                <div className="bg-[#F3F5F7] p-8 flex flex-col md:flex-row">
                    <div className="flex flex-col">
                    <h1 className="font-poppins font-medium text-primaryBlack text-xl">Bedroom</h1>
                    <button onClick={()=>router.push('/elegant/shop?category=bedroom&price=null')} className="font-inter w-[95px] font-medium text-primaryBlack text-sm flex items-center gap-2 border-b border-primaryBlack mt-2">Shop Now <FaArrowRight /></button>
                    </div>
                    <img src="/home/wardrobe.png" className="md:w-1/2" alt="wardrobe image transparent" />
                </div>

                <div className="bg-[#F3F5F7] p-8 flex flex-col md:flex-row">
                    <div className="flex flex-col">
                    <h1 className="font-poppins font-medium text-primaryBlack text-xl">Kitchen</h1>
                    <button onClick={()=>router.push('/elegant/shop?category=kitchen&price=null')} className="font-inter w-[95px] font-medium text-primaryBlack text-sm flex items-center gap-2 border-b border-primaryBlack mt-2">Shop Now <FaArrowRight /></button>
                    </div>
                    <img src="/home/toaster.png" className="md:w-1/2" alt="toaster image transparent" />
                </div>
                </section>
            </section>

            <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 w-full">
            <div className="flex flex-col gap-2 bg-[#F3F5F7] p-5">
                <img className="w-10" src="/icons/Truck.svg" alt="truck icon" />
                <p className="font-inter font-semibold text-primaryBlack">Free Shipping</p>
                <p className="font-inter font-lgiht text-primaryGray">Order above $200</p>
            </div>
            <div className="flex flex-col gap-2 bg-[#F3F5F7] p-5">
                <img className="w-10" src="/icons/Money.svg" alt="money icon" />
                <p className="font-inter font-semibold text-primaryBlack">Money-back</p>
                <p className="font-inter font-lgiht text-primaryGray">30 days guarantee</p>
            </div>            
            <div className="flex flex-col gap-2 bg-[#F3F5F7] p-5">
                <img className="w-10"  src="/icons/Lock.svg" alt="lock icon" />
                <p className="font-inter font-semibold text-primaryBlack">Secure Payments</p>
                <p className="font-inter font-lgiht text-primaryGray">Secured by stripe</p>
            </div>
            <div className="flex flex-col gap-2 bg-[#F3F5F7] p-5">
                <img className="w-10" src="/icons/Call.svg" alt="call icon" />
                <p className="font-inter font-semibold text-primaryBlack">24/7 Support</p>
                <p className="font-inter font-lgiht text-primaryGray">Phone and Email support</p>
            </div>
            </section>

            <section className="flex flex-col gap-5 md:gap-10 md:flex-row md:items-center bg-[#F3F5F7]">
                <img src="/home/bedroom(2).jpg" className="md:w-1/2" />

                <div className="flex flex-col gap-3 md:gap-5 p-5  md:w-1/2">
                    <p className="text-[#377DFF] font-inter font-bold">SALE UP TO 35% OFF</p>
                    <h1 className="font-poppins font-medium text-primaryBlack text-3xl">HUNDREDS of New lower prices!</h1>
                    <p className="font-inter font-light text-primaryBlack text-md">It’s more affordable than ever to give every room in your home a stylish makeover</p>
                    <button onClick={()=>router.push('/elegant/shop')} className="font-inter font-medium text-primaryBlack flex w-[105px] justify-center items-center gap-2 border-b border-primaryBlack">Shop Now <FaArrowRight/></button>
                </div>
            </section>

            <section className="w-full p-16 mb-[-80px] bg-[url('/home/newsLetter.jpg')] bg-cover bg-center">
                <div className="max-w-[400px] flex flex-col gap-5 items-center text-center mx-auto">
                <h1 className="font-poppins font-medium text-primaryBlack text-3xl">Join Our Newsletter</h1>
                <p className="font-inter font-light text-primaryBlack text-md text-center">Sign up for deals, new products and promotions</p>

                <div className="flex gap-2 border-b border-primaryGray items-center justify-between pb-2 w-full"><FaEnvelope className="text-3xl"/> <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="Email adress" className="font-inter bg-transparent font-light w-full text-primaryGray text-sm outline-none" /><button className="font-inter font-medium text-primaryGray" onClick={()=>setFormState('loading')}>{formState === 'loading' ? <Loader /> : formState === 'check' ? <FaCheck /> : "Signup"}</button></div>
                </div>
            </section>
        </div>

        <Footer />
    </div>
  )
}

export default page
