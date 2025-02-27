"use server";

import { callDatabase,QueryProfileData,QueryProductsData,QueryAllProductsData } from "@/config/database";
import { decodeToken } from "../auth/token";
import { revalidateTag } from "next/cache";

export const FetchProfileData = async () => {
 
    //fetch profile data: username,email,image
    let jwtResponse = await decodeToken();
    const userId = jwtResponse.userId;
      
    const query = "SELECT image,username,email FROM users WHERE id = ?";
   
    let data = await QueryProfileData(query,[userId]);
    return data;
}

export const FetchProductsData = async () => {
  //decode the token and get the userId
  
  try{
  let jwtResponse = await decodeToken();
  const userId = jwtResponse.userId;

  const query = "SELECT * FROM products WHERE userId = ?";

  const data = await QueryProductsData(query,[userId]);
  return data;
  }catch(err){
    return err;
  }
}

export const FetchAllProductsData = async (category,price) => {

  const query = "SELECT * FROM products LIMIT 8";


   try{
 
    if(category === undefined && price === undefined){
      console.log('fetch all');
      
    }

    if(category === "null"){
      console.log('fetch based on the price');
    }

    if(price === "null"){
      console.log('fetch based on the category');
    }

    if(price !== "null" && price !== undefined && category !== "null" && category !== undefined){
      console.log('fetch based on the category and price');
    }

    const data = await QueryAllProductsData(query,[]);

    console.log(data);
    return data;

   }catch(err){
    console.log(err);
   }
}
export async function revalidateCache(tag){
  revalidateTag(tag);
}