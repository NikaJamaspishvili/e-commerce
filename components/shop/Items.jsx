import CardComponent from "./CardComponent";
import { Suspense } from "react";
import SketelonUI from "../reusable/SketelonUI";

import { FetchAllProductsData } from "@/actions/query/fetchFunctions";

async function Items({searchParams,}) {

 //define the url parameters
 const category = await searchParams.category;
 const price = await searchParams.price;

 console.log(category,price);

 const array = await FetchAllProductsData(category,price);

//  console.log(array);

  return (
    <div className="flex flex-col w-full">
    <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 max-[400px]:grid-cols-1 max-md:gap-8 gap-4 mt-10">
  {array.map((result,index)=>{
    return <Suspense fallback={<SketelonUI />}>
    <CardComponent result={result}/>
    </Suspense>
  })}
    </div>
    {array.length === 8 && <button className="border border-primaryBlack text-primaryBlack font-inter rounded-full p-3 w-[200px] mx-auto text-xl mt-8">Show more</button>}
    </div>
  )
}

export default Items
