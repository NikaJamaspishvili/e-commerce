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

let correctValues = [
  "bedroom",
  "living-room",
  "kitchen",
  "dining-room",
  "bathroom",
  "storage-room"
];


export const validateCategory = z.object({
   category: z.string().refine(val => correctValues.includes(val), "invalid category"),
})

export const validatePrice = z.object({
   price: z.string().refine((val) => {
    // Step 1: Split the string by comma
    const array = val.split(',').map(Number);

    // Step 2: Check that the array has exactly two elements
    if (array.length !== 2) return false;

    // Step 3: Ensure both elements are whole numbers greater than 0
    if (!Number.isInteger(array[0]) || !Number.isInteger(array[1]) || array[0] <= 0 || array[1] <= 0) {
      return false;
    }

    // Step 4: Ensure the first element is less than the second
    if (array[0] >= array[1]) return false;

    return true;
  },"invalid price")
})


export const validateProductId = z.object({
  id: z.number().positive("Product ID must be a positive number"),
});

export const validateComment = z.object({
  comment: z.string().trim().max(500, "Comment must be at most 500 characters long").min(50,"Comment must be at least 50 characters long").nonempty("Comment is required"),
  starCount: z.number().min(1,"Rating is Required").max(5,"Rating must be at most 5 stars"),
});
