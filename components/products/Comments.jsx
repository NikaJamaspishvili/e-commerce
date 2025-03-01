function Comments() {
  let review = 5;
   return (
    <div className="mt-10 flex flex-col gap-5 border-t-2 border-[#E8ECEF] pt-10">
      <h1 className="font-poppins text-[#23262F] text-2xl font-medium">Customer Reviews</h1>

      <form className="w-full border-2 border-[#E8ECEF] flex rounded-3xl p-3">
        <input type="text" placeholder="Share your thoughts" className="w-full outline-none font-inter text-primaryGray" />
        <button className="hidden md:block">Write Review</button>
        <img className="block md:hidden w-14" src="/icons/ArrowRightBlack.svg" alt="arrow right icon with black background" />
      </form>

      <section className="flex mt-5 flex-col md:flex-row justify-between gap-3">
        <p className="font-poppins font-medium text-black text-3xl">11 Reviews</p>
        <select className="border-2 border-[#E8ECEF] rounded-lg p-3 font-inter font-semibold text-primaryBlack">
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </section>

      <section>
        <div>
          <img src="/icons/Profile.svg" alt="profile image" />

          <div>
            <h1>John Doe</h1>
            <section>
            {[...Array.from({length:5})].map((_,index) => {
              if(index < review){
                return <img src="/icons/Star.svg" key={index} alt="star icon" />
              }
                return <img className="w-4" src="/icons/EmptyStar.svg" key={index} alt="star icon" />
            })}
            </section>
            <p>Great product! I really like it.</p>
            <p>1 day ago</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Comments
