"use client";
import { insertNewComment } from "@/actions/query/postFunctions";
import { useActionState,useRef,useState } from "react";

function CommentsForm({productId}) {
 const [starCount,setStarCount] = useState(0);
 const ref = useRef(null);

 const [error,action,isPending] = useActionState(insertNewComment.bind(null,{productId,starCount}),null);

  return <div className="flex flex-col gap-5">
  <form onSubmit={()=>setStarCount(0)} action={action} className="w-full border-2 border-[#E8ECEF] flex rounded-3xl p-3">
  <input name="comment" type="text" required maxLength={500} placeholder="Share your thoughts" className="w-full outline-none font-inter text-primaryGray" />
  <button disabled={isPending} ref={ref} className="hidden md:block w-[200px] cursor-pointer font-inter font-medium text-white bg-primaryBlack p-3 rounded-3xl">{isPending ? "Loading...": "Write Review"}</button>
  <img onClick={()=>ref.current.click()} className="block md:hidden w-14 cursor-pointer" src="/icons/ArrowRightBlack.svg" alt="arrow right icon with black background" />
</form>

<section className="flex gap-3 mx-auto">
    {[...Array.from({length:5})].map((_,index) => {
        if(index < starCount){
        return <img className="w-8" src="/icons/Star.svg" key={index} alt="star icon" />
        }
        return <img className="w-8 cursor-pointer" onClick={()=>{setStarCount(index+1)}} src="/icons/EmptyStar.svg" key={index} alt="star icon" />
    })}
</section>

<div className="flex flex-col gap-2 mt-3 text-center">
{error?.errors?.comment?.[0] && <p className="font-inter text-errorColor">{error.errors.comment[0]}</p>}
{error?.errors?.starCount?.[0] && <p className="font-inter text-errorColor">{error.errors.starCount[0]}</p>}
</div>

</div> 
}

export default CommentsForm
