import { FetchAllProductsData } from "@/actions/query/fetchFunctions";
import ImageComponent from "./ImageComponent";

async function Items() {

 const array = await FetchAllProductsData();
 console.log(array);
  return (
    <div className="flex flex-col">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
  {array.map((result,index)=>{
    return <div key={result.id} className="relative group cursor-pointer flex flex-col gap-1">

        <section className="opacity-0 absolute left-3 top-1 font-inter font-bold group-hover:opacity-100 transition-all duration-75 ease-in flex flex-col gap-2">
            <p className="text-[#121212] bg-white p-1 px-2 rounded-md">NEW</p>
            <p className="bg-primaryGreen rounded-md text-[#FEFEFE] p-1 text-center">-50%</p>
        </section>

        {result.vr && <p className="absolute right-2 top-1 bg-purple-500 text-white rounded-md p-1 font-inter font-semibold">3D Model</p>}
        <button className="hidden opacity-0 absolute bg-primaryBlack text-[#FEFEFE] w-[85%] p-2 rounded-md bottom-24 left-1/2 translate-x-[-50%] font-inter group-hover:block group-hover:opacity-100 transition-all duration-75 ease-in">Add to cart</button>

        <ImageComponent publicId={JSON.parse(result.photos)[0]}/>

        <div className="flex gap-1 mt-1">
            {[...Array(result.startCount)].map((_,index) => {
                return <img key={index} src="/icons/Star.svg" alt="black star icon for rating" />
            })}
        </div>

         <p className="text-primaryBlack font-inter font-semibold text-md">{result.name}</p>
         <p className="text-[#121212] font-inter font-semibold text-sm">${result.price}</p>

        </div>
  })}
    </div>
    <button className="border border-primaryBlack text-primaryBlack font-inter rounded-full p-3 w-[200px] mx-auto text-xl mt-8">Show more</button>
    </div>
  )
}

export default Items
