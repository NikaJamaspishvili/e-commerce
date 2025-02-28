"use server";

import LeftSide from "@/components/products/LeftSide";
import RightSide from "@/components/products/RightSide";
import Comments from "@/components/products/Comments";

import { notFound } from "next/navigation";

import { fetchProductById } from "@/actions/query/fetchFunctions";
import { validateProductId } from "@/config/schema";
import { Elsie_Swash_Caps } from "next/font/google";

const page = async ({params}) => {

 //check if the id is valid
 //return the UI based on the id validation state

  const {id} = await params;
  
  const validationResult = validateProductId.safeParse({
    id: Number(id),
   });
 
  if(!validationResult.success) return notFound();
  let data = await fetchProductById(id);
  if(data.length === 0) return notFound();
  
  return <div className="pt-32">
   <div className="flex">
   <LeftSide />
   <RightSide />
   </div>
   <Comments />
    </div>

}

export default page
