"use server";

function Products() {

 let array = [
  {name:"Tray table",categories:["Bedroom","LivingRoom"],img:"/login_assets/chair.jpg",price:"$19.19"},
  {name:"Tray table",categories:["Bedroom","LivingRoom"],img:"/login_assets/chair.jpg",price:"$19.19"},
  {name:"Tray table",categories:["Bedroom","LivingRoom"],img:"/login_assets/chair.jpg",price:"$19.19"},
  {name:"Tray table",categories:["Bedroom","LivingRoom","LivingRoom","LivingRoom","LivingRoom"],img:"/login_assets/chair.jpg",price:"$19.19"},
  {name:"Tray table",categories:["Bedroom","LivingRoom"],img:"/login_assets/chair.jpg",price:"$19.19"},
 ]

  return (
    <div className="w-full mt-10 md:mt-0">
      <h1 className="font-inter font-semibold md:text-2xl text-3xl  text-[#000000]">My Products</h1>
  
      <div className="w-full hidden lg:block mt-10">
       <table className="w-full table-fixed">
        <thead>
        <tr className="border-b-2 border-[#93a4b2] text-primaryGray text-left">
          <th className="pb-2 font-light w-1/2">Product</th>
          <th className="pb-2 font-light">Price</th>
          <th className="py-2 font-light">Action</th>
        </tr>
        </thead>

        <tbody>
         {array.map((result,index)=>{
          return <tr key={index} className="mt-2 text-left text-primaryBlack font-inter border-b-2 border-[#E8ECEF]">
          <td className="py-6 font-light flex gap-3">
            <img className="w-[100px] h-[100px] rounded" src={result.img} alt={result.name} />
            <div className="flex flex-col gap-3 ">
            <p className="font-semibold">{result.name}</p>
           
            <section className="flex flex-col gap-2">
             {result.categories.map((result,index)=>{
                return <p key={index} className="text-sm">{result}</p>
              })}
            </section>

            </div>
          </td>
            <td className="py-6 font-light">{result.price}</td>
            <td className="py-6 font-light">
              <button className="px-10 py-3 rounded-xl bg-red-500 text-white">Delete</button>
            </td>
          </tr>
         })}
        </tbody>
      </table>
      </div>


      <section className="mt-10 lg:hidden">
        <p className="border-b-2 font-inter font-light text-primaryGray pl-10 pb-2 text-lg tracking-wider">Product</p>

       <section className="flex flex-col gap-10 mt-5">
        {array.map((result,index)=>{
        return <div key={index} className="flex flex-col gap-7 font-inter">

         <div className="flex gap-5 items-center">
          <img className="w-[100px]" src={result.img} alt={result.name} />
          <div className="flex flex-col gap-3 w-full">
          <p className="font-semibold break-words">{result.name}</p>
          <p className="font-light break-words">{result.categories}</p>
          <p className="font-light break-words">{result.price}</p>
          </div>
         </div> 

         <button className="py-3 rounded-xl bg-red-500 text-white">Delete</button>
          </div>
        })}
        </section> 
      </section>

    </div>
  )
}

export default Products;
