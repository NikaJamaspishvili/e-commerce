import {z} from "zod";

export const addProductsSchema = z.object({
    productCategory: z.string().array().max(6).nonempty("At least one category is required"),
    productImage: z.array(z.any()).max(6)
    .refine(arr => arr.filter(item => item === "").length < 3, {
      message: "At least 1 image is required",
    }),  
    productName: z.string().trim().max(15, "Product name must be at most 50 characters long").nonempty("Product name is required"),
    productPrice: z.number().nonnegative("Product price must be at least 0"),
    productCondition: z.string().trim().nonempty("Product condition is required"),
    productDescription: z.string().trim().max(500, "Product description must be at most 500 characters long").nonempty("Product description is required"),
});


export const authenticateSchema = z.object({
    username: z.string().regex(/^[a-zA-Z0-9]*$/, {message: "Input must only contain letters and numbers",}).min(3, "Username must be at least 3 characters long").max(16, "Username must be at most 16 characters long"),
    email: z.string().trim().email("Please enter a valid email"),
    password: z.string().trim().min(8, "Password must be at least 8 characters long").max(16, "Password must be at most 16 characters long"),
})

export const authenticateLoginSchema = z.object({
   username: z.string().regex(/^[a-zA-Z0-9]*$/, {message: "Input must only contain letters and numbers",}).min(3, "Username must be at least 3 characters long").max(16, "Username must be at most 16 characters long"),
   password: z.string().trim().min(8, "Password must be at least 8 characters long").max(16, "Password must be at most 16 characters long"),
})