"use server";

import { redirect } from "next/navigation";

import { uploadImage } from "../other/cloudinary";

import { addProductsSchema } from "@/config/schema";

export async function Addproducts(array,state,formData) {

//  console.log("formData",formData);  
//  console.log('categories',array.categories);
//  console.log('imagePreviews',array.imagePreviews);

 const validationResult = addProductsSchema.safeParse({
  productCategory: array.categories,
  productImage: array.imagePreviews,
  productName: formData.get("product_name"),
  productPrice: Number(formData.get("product_price")),
  productCondition: formData.get("product_condition"),
  productDescription: formData.get("product_description"),
 });
 
 if(!validationResult.success){
  
  return {
    errors: validationResult.error.flatten().fieldErrors,
  }
 }

 //authentication ends and authorization starts

 const {productImage,productCategory,productName,productPrice,productCondition,productDescription} = validationResult.data;


 console.log('rest of the code...');

 //upload images to cloudinary and store public ids to database

 let publicId = [];

 for(let image of productImage){
 if(image){
  let file = image.file;
  let result = await uploadImage(file);

  publicId.push(result.public_id);
 }
 }

 //insert product details to database

 const insertQuery = "INSERT INTO products (product_name,product_price,product_condition,product_description,product_category,product_image) VALUES (?,?,?,?,?,?)";

//redirect('/elegant/profile/myproducts');
}