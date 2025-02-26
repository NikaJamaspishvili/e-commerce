"use server";

import { callDatabase } from "@/config/database";
import { revalidateTag } from "next/cache";
import {redirect} from "next/navigation";
import { cookies } from 'next/headers';

import { deleteImage } from "../other/cloudinary";

export const deleteProduct = async (id,arrayId)=>{
    console.log(arrayId);
        //1. delete from the database

    const query = "DELETE FROM products WHERE id = ?";
    const result = await callDatabase(query,[id]);
    
    //2.delete photos from cloudinary 

    let array = JSON.parse(arrayId);
    
    await deleteImage(array);

    revalidateTag("products");
}

export const logOutAction = async ()=>{

 //delete the token cookie from users browser
 
 const cookieStore = await cookies();
 cookieStore.delete("token");
 redirect('/register/signup');
}