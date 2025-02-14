"use client";

import dynamic from "next/dynamic";
import Loader from "../loader/Loader";

const DynamicOrders = dynamic(()=>import('./Orders'),{ssr:false,loading:()=><Loader />});
const DynamicProducts = dynamic(()=>import('./Products'),{ssr:false,loading:()=><Loader />});

function Conditional({variable}) {

 if(variable === "orders"){
   return <DynamicOrders/>
 }else if(variable === "myproducts"){
    return <DynamicProducts/>
 }
 return null;
}

export default Conditional;
