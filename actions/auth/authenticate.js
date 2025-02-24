"use server";

import bcrypt from "bcrypt";

import { callDatabase } from "@/config/database";
import { generateToken } from "./token";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { authenticateSchema,authenticateLoginSchema } from "@/config/schema";


export async function login(state,formData){


 const validationResult = authenticateLoginSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
 });

 if(!validationResult.success){
    return {
        errors: validationResult.error.flatten().fieldErrors,
    }
 }

 const {username,password} = validationResult.data;

 //authorization starts

 //check if username exists and compare passwords

 const query = "SELECT * FROM users WHERE username = ? AND provider = ?";
 const result = await callDatabase(query,[username,'local']);


 if(result.length === 0){
    return {
       errors: {
          username: ["Invalid username"],
       }
    }
 }

 const user = result[0];

 const passwordMatch = await bcrypt.compare(password,user.password);

 if(!passwordMatch) return {errors: {password: ["Invalid password"],}}
 
 //if they do exist and password is also correct, generate token and set it as http only cookie for user browser,

 let generatedToken = await generateToken(user.id);

 (await cookies()).set("token", generatedToken, {
  httpOnly: true,
  secure: false,
  sameSite: "Strict",
  path: "/",
});

// redirect user to shop page 
redirect('/shop');

}

export async function signup(state,formData){

   const validationResult = authenticateSchema.safeParse({
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
   });

   if(!validationResult.success){
      return {
         errors: validationResult.error.flatten().fieldErrors,
      }
   }

   //authorization starts

   const {username,email,password} = validationResult.data;

   //check if username exists already
   
   const selectQuery = "SELECT * FROM users WHERE username = ?";
   const selectResult = await callDatabase(selectQuery,[username]);

   if(selectResult.length > 0){
      return {
         errors: {
            username: ["Username already exists"],
         }
      }
   }

  // hash the password,

  let hashedPassword = await bcrypt.hash(password,10);

  // insert credentials in database,

  const query = "INSERT INTO users (username,email,password) VALUES (?,?,?)";
  const insertResult = await callDatabase(query,[username,email,hashedPassword]);

  const newUserId = insertResult.insertId;

  // generate jwt token and set it as http only cookie for user browser,

  let generatedToken = await generateToken(newUserId);

  (await cookies()).set("token", generatedToken, {
   httpOnly: true,
   secure: false,
   sameSite: "Strict",
   path: "/",
 });

  // redirect user to shop page
    redirect('/shop');

}

