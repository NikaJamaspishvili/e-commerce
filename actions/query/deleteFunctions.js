"use server";

import { callDatabase } from "@/config/database";
import { revalidateTag,revalidatePath } from "next/cache";
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

    revalidateTag("allProducts");
}

export const logOutAction = async ()=>{

 //delete the token cookie from users browser
 
 const cookieStore = await cookies();
 cookieStore.delete("token");
 redirect('/register/signup');
}

export const deleteComment = async (props,state,formData)=>{
    try{
        const query = "DELETE FROM comments WHERE id = ?";
        await callDatabase(query,[props.commentId]);
        revalidatePath(`/elegant/shop/${props.productId}`);
    }catch(err){
     return {message:"something went wrong"}
    }
}

export const removeCartItem = async (id)=>{
    const query = "DELETE FROM cart WHERE id = ?";
    await callDatabase(query,[id]);
    revalidateTag("cart");
}