"use client";
import { redirect } from 'next/navigation';

function Menu({value}) {

  const array = [
    { value: "account", label: "Account" },
    { value: "orders", label: "Orders" },
    { value: "myproducts", label: "My Products" },
    { value: "logout", label: "Log Out" },
  ];

  const sortedArray = array.sort((a)=>{
    return a.value === value ? -1 : 1;
  })

  return (
      <div className="bg-[#F3F5F7] md:h-full flex flex-col items-center text-center mt-10 md:mt-0 p-16 md:p-5 rounded-lg md:w-1/2 md:max-w-[260px] md:gap-7">
       
       <div className="text-center flex flex-col items-center">
         <section className="relative">
          <img className="w-[100px] h-[100px] rounded-full" src="/login_assets/chair.jpg" alt="profile image" />
          <img className="absolute right-0 bottom-0" src="/icons/Camera.svg" alt="camera icon" />
         </section>
         <h1 className="font-inter font-semibold text-lg tracking-wider mt-3">Sofia Havertz</h1>
       </div>
 
       <select onChange={(e)=>{redirect('/elegant/profile/'+e.target.value)}} className="md:hidden font-inter font-semibold text-sm p-3 rounded-lg border-2 text-primaryBlack border-primaryGray w-full mt-8">
        {sortedArray.map((result)=>{
        return <option key={result.value} value={result.value}>
          {result.label}
        </option>
        })}
       </select>
 
       <div className="md:flex md:items-start w-full hidden flex-col font-inter font-semibold text-primaryGray gap-4 text-start">
        <p onClick={()=>redirect('/elegant/profile/account')} className={`${value === "account" && "border-b border-primaryBlack text-primaryBlack"} cursor-pointer pb-2 w-full`}>Account</p>
        <p onClick={()=>redirect('/elegant/profile/orders')}className={`${value === "orders" && "border-b border-primaryBlack text-primaryBlack"} cursor-pointer pb-2 w-full`}>Orders</p>
        <p onClick={()=>redirect('/elegant/profile/myproducts')} className={`${value === "myproducts" && "border-b border-primaryBlack text-primaryBlack"} cursor-pointer pb-2 w-full`}>My Products</p>
        <p onClick={()=>redirect('/elegant/profile/logout')} className={`${value === "logout" && "border-b border-errorColor text-errorColor"} cursor-pointer pb-2 w-full`}>Log Out</p>
       </div>
 
     </div>
  )
}

export default Menu
