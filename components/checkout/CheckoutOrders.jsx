import CheckoutBtn from "./checkoutBtn"

async function CheckoutOrders({total,id}) {
  
  return (
    <div className="flex flex-col gap-5 border-[#E8ECEF] border p-5 w-4/5 max-w-[600px] mx-auto rounded-md shadow-lg md:items-center md:text-center">
      <h1 className="font-inter font-semibold text-md text-primaryGray">Thank you! 🎉</h1>
      <h1 className="font-poppins font-medium text-3xl w-2/3 md:w-auto text-[#23262F]">Your order has been Received</h1>

      <section className="flex flex-col gap-6 mt-5 md:w-1/2">
        <div className="md:justify-between flex flex-col md:flex-row gap-2 "><h1 className="font-inter font-semibold text-primaryGray">Order code: </h1><p className="font-inter font-semibold text-primaryBlack">#{id}</p></div>
        <div className="md:justify-between flex flex-col md:flex-row gap-2"><h1 className="font-inter font-semibold text-primaryGray">Date: </h1><p className="font-inter font-semibold text-primaryBlack">{new Date().toLocaleDateString("en-US")}</p></div>
        <div className="md:justify-between flex flex-col md:flex-row gap-2"><h1 className="font-inter font-semibold text-primaryGray">Total: </h1><p className="font-inter font-semibold text-primaryBlack">${total}</p></div>
        <div className="md:justify-between flex flex-col md:flex-row gap-2"><h1 className="font-inter font-semibold text-primaryGray">Payment method: </h1><p className="font-inter font-semibold text-primaryBlack">Credit Card</p></div>
      </section>

      <CheckoutBtn />
    </div>
  )
}

export default CheckoutOrders
