function Footer() {
  return (
    <div className="bg-[#232627] flex flex-col text-center items-center gap-12 pb-16 pt-12 lg:bg-primaryBlack lg:p-24">

        <section className="flex flex-col lg:flex-row text-center gap-10 lg:gap-20 lg:items-center lg:w-full lg:justify-between">

        <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
        <h1 className="font-poppins text-[#FFFFFF] text-3xl lg:text-2xl relative before:content-[''] before:absolute before:top-full lg:before:top-1/2 lg:before:translate-y-[-50%] pb-4 lg:pb-0 before:left-1/2 lg:before:left-full lg:pr-10 before:translate-x-[-50%] before:bg-primaryGray before:h-[2px] lg:before:h-[70%] before:w-1/4 lg:before:w-[1px]">3legant<span className="text-[#6C7275]">.</span></h1>
        <p className="font-inter text-[#E8ECEF] text-lg lg:text-sm font-extralight tracking-wider">Gift & Decoration Store</p>
        </div>

        <div className="font-inter cursor-pointer font-light text-[#FEFEFE] flex flex-col lg:flex-row gap-7 lg:gap-9 lg text-lg lg:text-md tracking-widest">
        <p>Home</p>
        <p>Shop</p>
        <p>Product</p>
        <p>Blog</p>
        <p>Contact Us</p>
        </div>
        </section>

        <section className="border-t border-primaryGray pt-6 lg:pt-3 gap-6 lg:gap-8 flex flex-col lg:flex-row-reverse lg:items-center lg:w-full lg:justify-between">
            <div className="flex justify-center gap-6">
                <img className="w-[30px] cursor-pointer" src="/icons/Instagram.svg" alt="instagram icon" />
                <img className="w-[30px] cursor-pointer" src="/icons/Facebook.svg" alt="facebook icon" />
                <img className="w-[30px] cursor-pointer" src="/icons/Youtube.svg" alt="youtube icon" />
            </div>

            <div className="lg:mr-auto text-sm lg:text-nowrap text-[#FEFEFE] font-poppins flex justify-center gap-6 lg:gap-4">
                <p className="cursor-pointer">Privacy Policy</p>
                <p className="cursor-pointer">Terms of Use</p>
            </div>
        
          <p className="text-[#E8ECEF] lg:text-nowrap lg:text-sm font-poppins font-extralight mt-3 lg:mt-0">Copyright © 2025 HomeDecor. All rights reserved</p>
        </section>

    </div>
  )
}

export default Footer
