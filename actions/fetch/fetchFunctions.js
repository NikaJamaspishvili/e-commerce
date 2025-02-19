"use server";

import { callDatabase } from "@/config/database";
import { decodeToken } from "../auth/token";


export const FetchProfileData = async () => {
 
    //fetch profile data: username,email,image
   
    let jwtResponse = await decodeToken();
    const userId = jwtResponse.userId;
      
    const query = "SELECT image,email,username FROM users WHERE id = ?";
   
    let data = await callDatabase(query,[userId]);
    
    console.log(data);
   
   }