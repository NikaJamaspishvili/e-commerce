import { FaCheck } from "react-icons/fa";

function CheckoutHeader({page}) {
  return (
    <header className="flex flex-col items-center w-full gap-10">
    <h1 className="font-poppins font-medium text-4xl">Check Out</h1>

    <div className="flex gap-10">
        <div className={`flex items-center gap-3 ${(page === "details" || page === undefined ) ? "border-b-2 border-primaryBlack": "border-b-2 border-[#45B26B]"} pb-5 cursor-pointer`}><p className={`${page === "orders" ? "bg-[#45B26B] text-[#FFFFFF] border-[#45B26B]":"bg-[#23262F] text-white"} w-10 min-w-10 h-10 rounded-full flex items-center justify-center`}>{page === "orders" ? <FaCheck/> : "1" }</p> <p className={`font-inter ${page === "orders" && "text-[#45B26B]"} font-semibold text-md`}>Checkout details</p></div>
        <div className={`flex items-center gap-3 ${page === "orders" && "border-b-2 border-primaryBlack"} pb-5 cursor-pointer`}><p className={`${(page === "details" || page === undefined) ? "bg-[#B1B5C3] text-[#FCFCFD]":"bg-[#23262F] text-white"} w-10 min-w-10 h-10 rounded-full flex items-center justify-center`}>2</p> <p className={`font-inter ${(page === "details" || page === undefined) && "text-[#B1B5C3]"} font-semibold text-md`}>Order complete</p></div>
    </div>
    </header>
  )
}

export default CheckoutHeader
