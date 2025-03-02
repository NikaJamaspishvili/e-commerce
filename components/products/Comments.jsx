import CommentsForm from "./CommentsForm";
import CommentsFilter from "./CommentsFilter";
import { fetchComments } from "@/actions/query/fetchFunctions";
import ImageComponent from "../shop/ImageComponent";


import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

async function Comments({productId,order}) {

  dayjs.extend(relativeTime);

  let data = await fetchComments(productId,order);
  console.log("comments data is: ",data);

   return (
    <div className="mt-10 flex flex-col gap-5 border-t-2 border-[#E8ECEF] max-lg:max-w-[540px] pt-10 md:w-3/4">
      <h1 className="font-poppins text-[#23262F] text-2xl font-medium">Customer Reviews</h1>

    <CommentsForm productId={productId}/>

      <section className="flex mt-5 flex-col md:flex-row justify-between gap-4">
        <p className="font-poppins font-medium text-black text-3xl">{data.length} Reviews</p>
        <CommentsFilter data={data}/>
      </section>

      <section className="pt-5 flex flex-col gap-10">
        {data.map((result,index)=>{
          return <div key={result.id} className="flex gap-5 items-start md:gap-5">
           <ImageComponent publicId={result.image} imageWidth={60} imageHeight={60} extraClasses={"rounded-full"}/>
 
           <div className="flex flex-col gap-3">
             <h1 className="font-inter font-semibold text-primaryBlack text-xl">{result.username}</h1>
             <section className="flex gap-1">
             {[...Array.from({length:5})].map((_,index) => {
               if(index < result.rating){
                 return <img src="/icons/Star.svg" key={index} alt="star icon" />
               }
                 return <img className="w-4" src="/icons/EmptyStar.svg" key={index} alt="star icon" />
             })}
             </section>
             <p className="font-inter text-[#353945] text-md font-light w-full break-all">{result.comment}</p>
             <p className="font-inter font-semibold text-primaryGray">{dayjs(result.date).fromNow()}</p>
           </div>
         </div>
        })}
       
      </section>
    </div>
  )
}

export default Comments
