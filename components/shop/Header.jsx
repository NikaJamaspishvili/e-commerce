function Header() {
  return (
    <div className="w-full flex flex-col gap-8 text-center items-center justify-center bg-[url('/shop_assets/Room.jpg')] bg-cover bg-center py-32 md:py-40 rounded">
      <h1 className="font-poppins text-5xl w-full md:text-8xl">Shop Page</h1>
      <div>
      <p className="text-[#121212] typeWritterAnimation font-inter font-light text-xl md:text-2xl">Let's design the place you always imagined.</p>
      </div>
    </div>
  )
}

export default Header;
