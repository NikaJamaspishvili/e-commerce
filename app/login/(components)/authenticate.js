"use server";

import {z} from "zod";

 const authenticateSchema = z.object({
    username: z.string().regex(/^[a-zA-Z0-9]*$/, {message: "Input must only contain letters and numbers",}).min(3, "Username must be at least 3 characters long"),
    email: z.string().trim().email("Please enter a valid email"),
    password: z.string().trim().min(8, "Password must be at least 8 characters long").max(16, "Password must be at most 16 characters long"),
})

export async function login(state,formData){

 const validationResult = authenticateSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
 });

 if(!validationResult.success){
    return {
        errors: validationResult.error.flatten().fieldErrors,
    }
 }

}



