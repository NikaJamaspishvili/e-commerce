import { fetchCartData } from "@/actions/query/fetchFunctions"
import { insertIntoOrders } from "@/actions/query/postFunctions";
import ImageComponent from "../shop/ImageComponent";

async function CheckoutOrders({total}) {

  let data = await fetchCartData();

  const date = new Date();
  let updatedDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  console.log(updatedDate);

  let result = await insertIntoOrders(total,updatedDate);

  console.log(result);
  
  return (
    <div className="flex flex-col gap-5 border-[#E8ECEF] border p-5 w-4/5 max-w-[600px] mx-auto rounded-md shadow-lg md:items-center md:text-center">
      <h1 className="font-inter font-semibold text-md text-primaryGray">Thank you! 🎉</h1>
      <h1 className="font-poppins font-medium text-3xl w-2/3 md:w-auto text-[#23262F]">Your order has been Received</h1>

      <section className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5 max-md:max-w-[300px]">
        {data.map((result,index)=>{
          if(result.photos){
          return <div key={index}><ImageComponent publicId={JSON.parse(result.photos)[0]} imageWidth={100} imageHeight={100} key={index} extraClasses="rounded-md" /></div>
          }
        })}

      </section>

      <section className="flex flex-col gap-2 mt-5 md:w-1/2">
        <div className="border-b border-[#E8ECEF] pb-5 md:justify-between flex flex-col md:flex-row gap-2 "><h1 className="font-inter font-semibold text-primaryGray">Order code: </h1><p className="font-inter font-semibold text-primaryBlack">#121212</p></div>
        <div className="border-b border-[#E8ECEF] pb-5 md:justify-between flex flex-col md:flex-row gap-2"><h1 className="font-inter font-semibold text-primaryGray">Date: </h1><p className="font-inter font-semibold text-primaryBlack">October 19,2023</p></div>
        <div className="border-b border-[#E8ECEF] pb-5 md:justify-between flex flex-col md:flex-row gap-2"><h1 className="font-inter font-semibold text-primaryGray">Total: </h1><p className="font-inter font-semibold text-primaryBlack">${total}</p></div>
        <div className="border-b border-[#E8ECEF] pb-5 md:justify-between flex flex-col md:flex-row gap-2"><h1 className="font-inter font-semibold text-primaryGray">Payment method: </h1><p className="font-inter font-semibold text-primaryBlack">Credit Card</p></div>
      </section>
    </div>
  )
}

export default CheckoutOrders
