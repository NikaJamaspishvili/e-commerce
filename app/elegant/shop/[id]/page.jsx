"use server";

import LeftSide from "@/components/products/LeftSide";
import RightSide from "@/components/products/RightSide";
import Comments from "@/components/products/Comments";

import { notFound } from "next/navigation";

import { fetchProductById } from "@/actions/query/fetchFunctions";
import { validateProductId } from "@/config/schema";

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
  
  return <div className="pt-32 flex flex-col">
   <div className="flex flex-col md:w-3/4 mx-auto md:flex-row gap-5 md:gap-10">
   <LeftSide condition={data[0].condition} photos={data[0].photos}/>
   <RightSide stars={data[0].stars} name={data[0].name} price={data[0].price} description={data[0].description}/>
   </div>
   <Comments />
    </div>

}

export default page
