import CheckoutOrders from "@/components/checkout/CheckoutOrders";
import CheckoutDetails from "@/components/checkout/CheckoutDetails";
import CheckoutHeader from "@/components/checkout/CheckoutHeader";

async function page({searchParams}) {

 const { page, total, id} = await searchParams;

  return (
    <div className="pt-40 flex flex-col gap-10">
    <CheckoutHeader page={page}/>
    {(page === "details" || page === undefined) && <CheckoutDetails total={total}/>}
    {page === "orders" && <CheckoutOrders total={total} id={id}/>}

    </div>
  )
}

export default page;
