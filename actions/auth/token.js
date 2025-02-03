"use server";

import jwt from "jsonwebtoken";

import {cookies} from "next/headers";

export async function generateToken (id) {

    const token = jwt.sign({userId:id},process.env.JWT_SECRET);

    return token;
}

export async function verifyToken() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
  
    if (!token) return null;
  
    try {
      const decoded = jwt.decode(token, process.env.JWT_SECRET);
      return decoded;
    } catch (error) {
      return null;
    }
  }