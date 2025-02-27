"use server";

import { callDatabase,QueryProfileData,QueryProductsData,QueryAllProductsData } from "@/config/database";
import { validateCategory,validatePrice } from "@/config/schema";

import { decodeToken } from "../auth/token";
import { revalidateTag } from "next/cache";
import Products from "@/components/profile/Products";


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

 //first case: category is not defined or is equal to null, price is not defined or is equal to null, [In this case fetch all the products]
 //second case: category is defined and is not equal to null, price is not defined or is equal to null, [In this case validate the category and execute the query]
 //third case: price is defined and is not equal to null, category is not defined or is equal to null, [In this case validate the price and execute the query]
 //fourth case: both category and price are defined, [In this case validate both and execute the query]

 console.log(category,price);
 let query = "SELECT * FROM products LIMIT 8";

 //FIRST CASE
 if((!category || category === 'null') && (!price || price === 'null')){
  console.log('fetch all the products');
  query = "SELECT * FROM products LIMIT 8";
 }

 //SECOND CASE
 if(category && category !== 'null' && (!price || price === 'null')){
 console.log('fetch products by category');

  //validate the category
  
 const validationResult = validateCategory.safeParse({
  category: category,
 });

 if(!validationResult.success){
 console.log('category failed: fetch all the products');
 query = "SELECT * FROM products LIMIT 8";
 }else{
 query = `SELECT * FROM products WHERE JSON_CONTAINS(category,'"${category}"')`;
 }
}

 //THIRD CASE
 if(price && price !== 'null' && (!category || category === 'null')){
   console.log('fetch products by price');

   //validate the price

   const validationResult = validatePrice.safeParse({
    price: price,
   });
 
   if(!validationResult.success){
   console.log('price failed: fetch all the products');
   query = "SELECT * FROM products LIMIT 8";
   }else{
   const array = price.split(',').map(Number);
   query = `SELECT * FROM products WHERE price BETWEEN ${array[0]} AND ${array[1]}`
   }

 }

 //FOURTH CASE
 if(category && category !== 'null' && price && price !== 'null'){
   console.log('fetch products by category and price');

   //validate the price and the category

   const validationCategoryResult = validateCategory.safeParse({
    category: category,
   });
 
   const validationPriceResult = validatePrice.safeParse({
    price: price,
   });
 
   if(!validationCategoryResult.success || !validationPriceResult.success){
   console.log('category or price failed: fetch all the products');
   query = "SELECT * FROM products LIMIT 8";
   }else{
   const array = price.split(',').map(Number);
   query = `SELECT * FROM products WHERE JSON_CONTAINS(category,'"${category}"') AND price BETWEEN ${array[0]} AND ${array[1]}`
   }
 }

   try{
 
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