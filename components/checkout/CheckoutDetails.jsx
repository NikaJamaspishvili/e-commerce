import { insertIntoOrders } from "@/actions/query/postFunctions"
import CheckoutForm from "./CheckoutForm"

function CheckoutDetails({total}) {

  const updatedServerAction = insertIntoOrders.bind(null,total);

  return (
    <form action={updatedServerAction} className="flex flex-col gap-10 max-w-[650px] w-full mx-auto">
      
      <section className="border border-primaryGray rounded-md p-5 flex flex-col gap-5">
        <h1 className="font-poppins font-medium text-primaryBlack text-xl">Contact Information</h1>

        <div className="flex gap-5 max-sm:flex-col w-full">
          <div className="flex flex-col gap-2 w-full"><h1 className="text-primaryGray font-inter font-bold text-sm">FIRST NAME</h1><input required className="font-inter font-primaryGray border border-[#CBCBCB] rounded-lg p-3" type="text" placeholder="First Name" /></div>
          <div className="flex flex-col gap-2 w-full"><h1 className="text-primaryGray font-inter font-bold text-sm">Last NAME</h1><input required className="font-inter font-primaryGray border border-[#CBCBCB] rounded-lg p-3" type="text" placeholder="Last Name" /></div>
        </div>

        <div className="flex flex-col gap-2"><h1 className="text-primaryGray font-inter font-bold text-sm">PHONE NUMBER</h1><input required className="font-inter font-primaryGray border border-[#CBCBCB] rounded-lg p-3" type="text" placeholder="Phone Number" /></div>
        <div className="flex flex-col gap-2"><h1 className="text-primaryGray font-inter font-bold text-sm">EMAIL ADRESS</h1><input required className="font-inter font-primaryGray border border-[#CBCBCB] rounded-lg p-3" type="text" placeholder="Email Adress" /></div>
      </section>

      <section className="border border-primaryGray rounded-md p-5 flex flex-col gap-5">
        <h1 className="font-inter text-primaryBlack font-semibold text-xl">Shipping Adress</h1>
        <div className="flex flex-col gap-2"><h1 className="text-primaryGray font-inter font-bold text-sm">STREET ADDRESS *</h1><input required className="font-inter font-primaryGray border border-primaryGray rounded-lg p-3" type="text" placeholder="Street Address" /></div>
        <div className="flex flex-col gap-2"><h1 className="text-primaryGray font-inter font-bold text-sm">COUNTRY *</h1><input required className="font-inter font-primaryGray border border-primaryGray rounded-lg p-3" type="text" placeholder="Country" /></div>
        <div className="flex flex-col gap-2"><h1 className="text-primaryGray font-inter font-bold text-sm">TOWN / CITY *</h1><input required className="font-inter font-primaryGray border border-primaryGray rounded-lg p-3" type="text" placeholder="Town / City" /></div>
        <div className="flex gap-5 max-sm:flex-col">
          <div className="flex flex-col gap-2 w-full"><h1 className="text-primaryGray font-inter font-bold text-sm">STATE</h1><input required className="font-inter font-primaryGray border border-primaryGray rounded-lg p-3" type="text" placeholder="State" /></div>
          <div className="flex flex-col gap-2 w-full"><h1 className="text-primaryGray font-inter font-bold text-sm">ZIP CODE</h1><input required className="font-inter font-primaryGray border border-primaryGray rounded-lg p-3" type="text" placeholder="Zip Code" /></div>
        </div>
        <div className="flex items-center gap-2"><input required type="checkbox" className="w-4 h-4" /><p className="font-inter text-primaryGray text-sm tracking-wide">Use a different billing address (optional)</p></div>
      </section>

      <section className="border border-primaryGray rounded-md p-5 flex flex-col gap-6">
        <h1 className="font-poppins text-primaryBlack font-medium text-xl">Payment method</h1>
        <CheckoutForm />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2"><h1 className="text-primaryGray font-inter font-bold text-sm">CARD NUMBER</h1><input required className="font-inter font-primaryGray border border-primaryGray rounded-lg p-3" type="text" placeholder="Card Number" /></div>
          <div className="flex gap-5 max-sm:flex-col">
            <div className="flex flex-col gap-2 w-full"><h1 className="text-primaryGray font-inter font-bold text-sm">EXPIRATION DATE</h1><input required className="font-inter font-primaryGray border border-primaryGray rounded-lg p-3" type="text" placeholder="Expiration Date" /></div>
            <div className="flex flex-col gap-2 w-full"><h1 className="text-primaryGray font-inter font-bold text-sm">CVV</h1><input required className="font-inter font-primaryGray border border-primaryGray rounded-lg p-3" type="text" placeholder="CVV code" /></div>
          </div>
        </div>
      </section>

      <button className="bg-primaryBlack text-white py-3 rounded-md font-inter font-light text-lg">Place Order</button>
    </form>
  )
}

export default CheckoutDetails
