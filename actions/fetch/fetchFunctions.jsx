"use server";

import { callDatabase } from "@/config/database";
import { decodeToken } from "../auth/token";


const FetchProfileData = async () => {
 
 //fetch profile data: username,email,image

 let userId = await decodeToken();
 console.log(userId);

 let data = await callDatabase();

}