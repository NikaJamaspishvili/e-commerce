"use client";

import { useEffect,useState,useTransition } from "react";

import ImageComponent from "./ImageComponent";
import Loader from "../reusable/Loader";

import { redirect } from "next/navigation";

import { removeCartItem } from "@/actions/query/deleteFunctions";
import { fetchCartData } from "@/actions/query/fetchFunctions";


function CartComponent({setShowCart}) {
  const [count,setCount] = useState(0);
  const [cartData,setCartData] = useState([]);
  const [pending,startTransition] = useTransition();

  useEffect(()=>{

    startTransition(async ()=>{
      let result = await fetchCartData();
      const updatedResult = result.map((result)=>{
        return {...result,quantity:1}
      });
      console.log("updatedResult",updatedResult);
      setCartData(updatedResult);
      setCount(result.length);
    })

  },[])

  async function deleteProduct(id){
    const array = [...cartData];
    let updatedArray = array.filter((result)=>{
        return result.id !== id;
    });
    setCartData(updatedArray);
    setCount(prev => prev - 1);
  
   await removeCartItem(id);
  
  console.log("updatedArray is: ",updatedArray);
  }


  function handleQuantityPlus(id){
    const array = [...cartData];
    let updatedArray = array.map((result)=>{
        if(result.productId === id){
           return {...result,quantity:result.quantity+1}
        }

        return result;
    });
    setCartData(updatedArray);
    console.log("updatedArray is: ",updatedArray);
  }


  function handleQuantityMinus(id){
    const array = [...cartData];
    let updatedArray = array.map((result)=>{
        if(result.productId === id && result.quantity > 1){
           return {...result,quantity:result.quantity-1}
        }

        return result;
    });
    console.log("updatedArray is: ",updatedArray);
    setCartData(updatedArray);
  }


  return (
    <div className="fixed right-0 top-0 w-2/3 max-sm:w-full h-full flex flex-col bg-white p-5 z-20 sm:max-w-[500px]">
      <h1 className="text-[#121212] font-poppins font-medium text-4xl mt-3 max-xsm:hidden">Cart</h1>

      <section className="flex flex-col gap-10 mt-10 overflow-auto">
        {pending && <Loader />}
        {cartData.length === 0 && <div className="flex justify-center text-center items-center w-full h-screen text-2xl font-inter tracking-wide"><h1>Cart Is Empty</h1></div>}
       {cartData.map((result,index)=>{

       return <div key={result.id} className="flex justify-between border-b border-[#E8ECEF] pb-4 gap-20">

        <div className="flex gap-3 items-center">
            <ImageComponent publicId={JSON.parse(result.photos)[0]} imageWidth={100} imageHeight={100}/>
            <div className="flex flex-col h-full justify-between">
                <h1 className="font-inter font-semibold text-sm text-primaryBlack">{result.name}</h1>
                <h1 className="font-inter font-light text-sm text-primaryGray">{result.condition}</h1>
                <div className="flex gap-3 border-2 rounded-md py-1 px-3 justify-around border-primaryGray min-w-[100px]">
                    <img src="/icons/Minus.svg" alt="minus icon" className="cursor-pointer w-5" onClick={()=>handleQuantityMinus(result.productId)}/>
                    <p className="font-semibold font-inter text-[#121212]">{result.quantity}</p>
                    <img src="/icons/Add.svg" alt="plus icon" className="cursor-pointer w-5" onClick={()=>handleQuantityPlus(result.productId)}/>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-end gap-3">
            <h1 className="font-inter text-sm font-semibold text-[#121212]">${result.price}</h1>
            <img src="/icons/X.svg" onClick={()=>deleteProduct(result.id)} className="w-4 cursor-pointer" alt="remove product button" />
        </div>

        </div>
        })}
      </section>

      <section className="flex flex-col gap-3 mt-auto">
        <div className="flex w-full justify-between">
            <p className="font-inter text-sm font-light">Shipping</p>
            <p className="font-inter font-semibold text-sm">Free</p>
        </div>

        <div className="flex w-full justify-between">
            <p className="text-primaryBlack font-poppins text-lg">Total</p>
            <p className="text-primaryBlack font-inter font-semibold text-lg">${cartData.reduce((total,result)=>total+result.price*result.quantity,0)}</p>
        </div>

      <button onClick={()=>{
        setShowCart(false);
        if(cartData.length > 0) redirect('/elegant/checkout?total='+cartData.reduce((total,result)=>total+result.price*result.quantity,0));
        }} className="bg-primaryBlack text-white rounded-md py-3 mt-2">Checkout</button>
      </section>
    </div>
  )
}

export default CartComponent
