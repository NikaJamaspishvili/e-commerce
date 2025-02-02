"use server";

import {z} from "zod";
import bcrypt from "bcrypt";

import { callDatabase } from "@/config/database";
import { generateToken } from "./token";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";


 const authenticateSchema = z.object({
    username: z.string().regex(/^[a-zA-Z0-9]*$/, {message: "Input must only contain letters and numbers",}).min(3, "Username must be at least 3 characters long").max(16, "Username must be at most 16 characters long"),
    email: z.string().trim().email("Please enter a valid email"),
    password: z.string().trim().min(8, "Password must be at least 8 characters long").max(16, "Password must be at most 16 characters long"),
})

const authenticateLoginSchema = z.object({
   username: z.string().regex(/^[a-zA-Z0-9]*$/, {message: "Input must only contain letters and numbers",}).min(3, "Username must be at least 3 characters long").max(16, "Username must be at most 16 characters long"),
   password: z.string().trim().min(8, "Password must be at least 8 characters long").max(16, "Password must be at most 16 characters long"),
})

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

 const query = "SELECT * FROM users WHERE username = ?";
 const result = await callDatabase(query,[username]);

 console.log(result);

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

// redirect user to home page 
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

  // redirect user to home page
    redirect('/shop');

}



