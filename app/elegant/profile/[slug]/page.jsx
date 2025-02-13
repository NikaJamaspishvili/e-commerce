"use server";

import {use} from "react";

import Menu from "@/components/profile/Menu";
import Account from '@/components/profile/Account';
import Orders from '@/components/profile/Orders';
import Products from '@/components/profile/Products';

const page = ({params}) => {
   
 const resolvedParams = use(params);
 const value = resolvedParams.slug;

  return (
    <div className="pt-40 max-w-[500px] mx-auto md:max-w-none md:mx-0">
      <h1 className="text-center font-poppins text-4xl md:text-5xl">My Account</h1>
      <section className="w-5/6 mx-auto md:flex md:gap-16 md:mt-16">
     <Menu value={value}/>

     {value === "account" && <Account />}
     {value === "orders" && <Orders />}
     {value === "myproducts" && <Products />}

      </section>
    </div>
  )
}

export default page;
