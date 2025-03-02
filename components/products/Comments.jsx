function Comments() {
  let review = 5;
   return (
    <div className="mt-10 flex flex-col gap-5 border-t-2 border-[#E8ECEF] max-lg:max-w-[540px] pt-10 md:w-3/4">
      <h1 className="font-poppins text-[#23262F] text-2xl font-medium">Customer Reviews</h1>

      <form className="w-full border-2 border-[#E8ECEF] flex rounded-3xl p-3">
        <input type="text" placeholder="Share your thoughts" className="w-full outline-none font-inter text-primaryGray" />
        <button className="hidden md:block w-[200px] cursor-pointer font-inter font-medium text-white bg-primaryBlack p-3 rounded-3xl">Write Review</button>
        <img className="block md:hidden w-14 cursor-pointer" src="/icons/ArrowRightBlack.svg" alt="arrow right icon with black background" />
      </form>

      <section className="flex mt-5 flex-col md:flex-row justify-between gap-4">
        <p className="font-poppins font-medium text-black text-3xl">11 Reviews</p>
        <select className="border-2 border-[#E8ECEF] rounded-lg p-3 font-inter font-semibold text-primaryBlack">
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </section>

      <section className="pt-5">
        <div className="flex gap-5 items-start md:gap-8">
          <img src="/icons/Profile.svg" className="w-full min-w-[50px] max-w-[50px]" alt="profile image" />

          <div className="flex flex-col gap-3">
            <h1 className="font-inter font-semibold text-primaryBlack text-xl">John Doe</h1>
            <section className="flex gap-1">
            {[...Array.from({length:5})].map((_,index) => {
              if(index < review){
                return <img src="/icons/Star.svg" key={index} alt="star icon" />
              }
                return <img className="w-4" src="/icons/EmptyStar.svg" key={index} alt="star icon" />
            })}
            </section>
            <p className="font-inter text-[#353945] text-md font-light w-full">I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.</p>
            <p className="font-inter font-semibold text-primaryGray">1 day ago</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Comments
