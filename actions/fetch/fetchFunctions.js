"use server";

import { QueryProfileData } from "@/config/database";
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

export async function revalidateCache(tag){
  revalidateTag(tag);
}