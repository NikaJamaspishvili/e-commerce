"use server";

import { redirect } from "next/navigation";

import { uploadImage,deleteImage } from "../other/cloudinary";
import { callDatabase } from "@/config/database";
import { decodeToken } from "../auth/token";

import { addProductsSchema,validateComment } from "@/config/schema";
import { revalidateTag,revalidatePath } from "next/cache";

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
  let result = await uploadImage(file,"product-images");

  publicId.push(result.public_id);
 }
 }

 //insert product details to database

 const insertQuery = "INSERT INTO products (name, description, photos, price, `condition`, model, category, userId) VALUES (?,?,?,?,?,?,?,?)";

 //decode the token and get the user id

 let token = await decodeToken();
 const userId = token.userId;

 const insertResult = await callDatabase(insertQuery,
  [
  productName, 
  productDescription, 
  JSON.stringify(publicId), 
  productPrice, 
  productCondition,
  "null", 
  JSON.stringify(productCategory), 
  userId
  ]);

 //console.log(insertResult);
 revalidateTag('products');
 redirect('/elegant/profile/myproducts');
}





export async function updateProfileImage(file,previousImageId){

 //get the userId

 let token = await decodeToken();
 const userId = token.userId;

 //upload image to the cloudinary and obtain the public id
 let result = await uploadImage(file,"profile-images");
 console.log("updating profile, image result: ",result);

 //delete previous image fromt the cloudinary and continue...
console.log("previousImageId: ",previousImageId);
 if(previousImageId !== null){
  await deleteImage(previousImageId);
 }

//update the profile image in the database

 const updateQuery = "UPDATE users SET image = ? WHERE id = ?";

 const updateResult = await callDatabase(updateQuery,[result.public_id,userId]);

 //revalidate the profile query
 revalidateTag('profile');

 console.log("updating profile, update result: ",updateResult);

}

export async function insertNewComment(props,state,formData){
 //validate the comment.
 //insert the comment to the database.

 const comment = formData.get("comment");

 const token = await decodeToken();
 const userId = token.userId;
 
 const date = new Date();

 //console.log(comment,props,userId,date);

 const validationResult = validateComment.safeParse({
  comment: comment,
  starCount: props.starCount,
 });

 if(!validationResult.success){
  return {
    errors: validationResult.error.flatten().fieldErrors,
  }
 }
 
const insertQuery = "INSERT INTO comments (comment,rating,date,productId,userId) VALUES (?,?,?,?,?)";

await callDatabase(insertQuery,[comment,props.starCount,date,props.productId,userId]);
 
 revalidatePath(`/elegant/shop/${props.productId}`);
}

export async function insertIntoCart(productId){


 const { userId } = await decodeToken();


 console.log(productId,userId)

 const insertQuery = "INSERT INTO cart (productId,userId) VALUES (?,?)";

 await callDatabase(insertQuery,[productId,userId]);

 console.log('inserted into cart');

 revalidateTag("cart");
}