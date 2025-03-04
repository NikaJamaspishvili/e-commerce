import { FaArrowRight } from "react-icons/fa"
import ContactForm from "@/components/contact/ContactForm"
import Wrapper from "@/components/contact/Wrapper"

async function page() {
  return (
    <div className="pt-40 flex flex-col gap-5 md:gap-10 p-5">
      <Wrapper />
      <h1 className="font-poppins font-medium text-3xl text-primaryBlack md:text-5xl md:max-w-[1000px]">We believe in sustainable decor. We’re passionate about life at home.</h1>
      <p className="font-inter font-light text-primaryBlack md:max-w-[1000px]">Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present</p>

      <section className="flex flex-col md:flex-row">
        <img className="w-full md:w-1/2" src="/contact_us/bedroom.jpg" alt="" />
        <div className="flex flex-col gap-3 md:gap-5 bg-[#F3F5F7] p-5 md:p-16 md:justify-center w-full">
            <h1 className="font-poppins font-medium text-[#121212] text-xl md:text-4xl">About Us</h1>
            <p className="font-inter font-light w-4/5 md:max-w-[500px]">3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. Our customer service is always prepared to support you 24/7</p>
            <div className="flex items-center gap-2 border-b max-w-[120px] border-[#121212] mt-5"><button className="font-inter text-lg font-medium text-[#121212] border-[#121212]">Shop Now</button><FaArrowRight /></div>
        </div>
      </section>

      <section className="flex flex-col gap-2">
        <h1 className="font-poppins font-medium text-xl text-[#121212] text-center md:text-4xl">Contact Us</h1>

        <div className="flex flex-col md:flex-row items-center gap-5 mt-5">
            <div className="bg-[#F3F5F7] w-full items-center flex flex-col p-5 gap-3">
                <img src="/icons/Store.svg" alt="store icon" />
                <p className="font-inter font-bold text-primaryGray">ADDRESS</p>
                <p className="font-inter font-semibold text-center">234 Hai Trieu, Ho Chi Minh City, Viet Nam</p>
            </div>
            <div className="bg-[#F3F5F7] w-full items-center flex flex-col p-5 gap-3">
                <img src="/icons/Call.svg" alt="store icon" />
                <p className="font-inter font-bold text-primaryGray">Contact US</p>
                <p className="font-inter font-semibold text-center">+84 234 567 890</p>
            </div>
            <div className="bg-[#F3F5F7] w-full items-center flex flex-col p-5 gap-3">
                <img src="/icons/Mail.svg" alt="store icon" />
                <p className="font-inter font-bold text-primaryGray">EMAIL</p>
                <p className="font-inter font-semibold text-center">hello@3legant.com</p>
            </div>
        </div>
        </section>
        <section className="flex flex-col md:flex-row gap-6 md:gap-10 mt-10">
            <ContactForm />
            <img className="order-1 object-cover md:w-1/2 md:order-2" src="/contact_us/map.png" alt="" />
        </section>

        <section className="grid grid-cols-2 mb-[-100px] md:grid-cols-4 p-5 gap-10 mt-10 w-full bg-[#F3F5F7] md:p-10">
            <div className="flex flex-col gap-2">
                <img className="w-10" src="/icons/Truck.svg" alt="truck icon" />
                <p className="font-inter font-semibold text-primaryBlack">Free Shipping</p>
                <p className="font-inter font-lgiht text-primaryGray">Order above $200</p>
            </div>
            <div className="flex flex-col gap-2">
                <img className="w-10" src="/icons/Money.svg" alt="money icon" />
                <p className="font-inter font-semibold text-primaryBlack">Money-back</p>
                <p className="font-inter font-lgiht text-primaryGray">30 days guarantee</p>
            </div>            
            <div className="flex flex-col gap-2">
                <img className="w-10"  src="/icons/Lock.svg" alt="lock icon" />
                <p className="font-inter font-semibold text-primaryBlack">Secure Payments</p>
                <p className="font-inter font-lgiht text-primaryGray">Secured by stripe</p>
            </div>
            <div className="flex flex-col gap-2">
                <img className="w-10" src="/icons/Call.svg" alt="call icon" />
                <p className="font-inter font-semibold text-primaryBlack">24/7 Support</p>
                <p className="font-inter font-lgiht text-primaryGray">Phone and Email support</p>
            </div>
        </section>
    </div>
  )
}

export default page
