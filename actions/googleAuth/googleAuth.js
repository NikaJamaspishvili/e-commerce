"use server";

import { signIn } from "@/auth";
import { auth } from "@/auth";
import { generateToken } from "../auth/token";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { callDatabase } from "@/config/database";


export async function googleLogin(){
  await signIn("google",{redirectTo:"/register/google/username"});
}


export async function checkGoogleUser(){
const session = await auth();

if(session){

  const {googleId} = session.user;

  const selectQuery = "SELECT * FROM users WHERE password = ?";
  const selectResult = await callDatabase(selectQuery,[googleId]);
  
  if(selectResult.length > 0){
     await googleLoginUser(selectResult[0].id);
  }

  return true;

}

}


export async function googleLoginUser(userId){
 
 const token = await generateToken(userId);

 (await cookies()).set("token", token, {
  httpOnly: true,
  secure: false,
  sameSite: "Strict",
  path: "/",  
 });

 redirect('/elegant/shop');
}

export async function googleRegisterUser(state,formData){

 const session = await auth();
 const username = formData.get("username");

 if(session){
 const {email,image,googleId} = session.user;

 const selectQuery = "SELECT * FROM users WHERE username = ?";
 const selectResult = await callDatabase(selectQuery,[username]);

 if(selectResult.length > 0){
    return {
       errors: {
          username: ["Username already exists"],
       }
    }
 }

 const insertQuery = "INSERT INTO users (username,email,password,provider,image) VALUES (?,?,?,?,?)"; 
 const insertResult = await callDatabase(insertQuery,[username,email,googleId,'google',image]);

 //assign jwt and end the game

let token =  await generateToken(insertResult.insertId);

(await cookies()).set("token", token, {
  httpOnly: true,
  secure: false,
  sameSite: "Strict",
  path: "/",  
 });

 redirect('/elegant/shop');
}
}