"use server";

import { callDatabase,QueryProfileData,QueryProductsData } from "@/config/database";
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
  let jwtResponse = await decodeToken();
  const userId = jwtResponse.userId;

  const query = "SELECT * FROM products WHERE userId = ?";

  const data = await QueryProductsData(query,[userId]);
  console.log(data);
}

export async function revalidateCache(tag){
  revalidateTag(tag);
}