"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function CommentsFilter({data}) {
 
  const router = useRouter();

  const searchParams = useSearchParams();
  const order =searchParams.get('order');
  
  if(data.length > 1){
  return <select value={order || "newest"} onChange={(e)=>router.push(`?order=${e.target.value}`,{scroll:false})} className="border-2 border-[#E8ECEF] rounded-lg p-3 font-inter font-semibold text-primaryBlack cursor-pointer">
    <option value="oldest">Oldest</option>
    <option value="newest">Newest</option>
  </select>
  }
}

export default CommentsFilter
