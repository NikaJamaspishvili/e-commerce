"use server";

import { callDatabase,QueryProfileData,QueryProductsData,QueryAllCommentsData,QueryProductsFromCart, QueryOrdersData } from "@/config/database";
import { validateCategory,validatePrice } from "@/config/schema";

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
 
    const data = await callDatabase(query,[]);

   console.log(data);
    return data;

   }catch(err){
    console.log(err);
   }
}

export async function fetchProductById(id){

 let { userId } = await decodeToken();

  const query = "SELECT * FROM products WHERE id = ?";

  const queryProductCartStatus = "SELECT COUNT(*) as count FROM cart WHERE productId = ? AND userId = ?";


  const data = await callDatabase(query,[id]);
  const count = await callDatabase(queryProductCartStatus,[id,userId]);

  if(data.length > 0 && data[0].userId === userId){
    return {data,count: count[0].count,isOwner: true};
  }else{
    return {data,count: count[0].count,isOwner: false};    
  }
}



export async function fetchComments(productId,order){

 //review count,image,username,starCount,comment,date
 let { userId } = await decodeToken();

 console.log(productId);

 try{

  const checkUserCommentProduct = `SELECT COUNT(*) AS count FROM comments WHERE productId = ? AND userId = ?`;
  const count = await callDatabase(checkUserCommentProduct,[productId,userId]);

  const query =`SELECT comments.*, users.image AS image, users.username AS username FROM comments JOIN users ON comments.userId = users.id WHERE comments.productId = ? ORDER BY comments.date ${order === "newest" || !order ? "DESC" : "ASC"};`;
  const data = await QueryAllCommentsData(query,[productId]);

  return {data,count: count[0].count};
 }catch(err){
  console.log(err);
 }
}

export async function fetchCartData(){

 let { userId } = await decodeToken();
 
 let query = "SELECT cart.id, cart.productId, cart.userId, products.price, products.condition, products.name , products.photos FROM cart JOIN products ON cart.productId = products.id WHERE cart.userId = ?;";

 const data = await QueryProductsFromCart(query,[userId]);
 return data;
}

export async function fetchOrdersData(){

 let { userId } = await decodeToken();

 let query = "SELECT * FROM orders WHERE userId = ?";

 const data = await QueryOrdersData(query,[userId]);

 return data;
}


export async function revalidateCache(tag){
  revalidateTag(tag);
}