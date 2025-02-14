"use server";

function Account() {
  return (
    <div className="flex flex-col w-full mt-10 gap-8 mb-10 md:mt-0">
      <h1 className="font-inter font-semibold text-[#000000] text-center md:text-left text-3xl md:text-2xl">Account Details</h1>
        <div className="flex flex-col gap-3">
        <label className="font-inter font-bold text-primaryGray">Username *</label>
        <p className="font-inter text-primaryGray border-2 rounded-lg border-[#CBCBCB] p-3">Sofia Havertz</p>
        <p className="font-inter text-primaryGray italic">This will be how your name will be displayed in the account section and in reviews</p>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <label className="font-inter font-bold text-primaryGray">Email *</label>
          <p className="font-inter text-primaryGray border-2 rounded-lg border-[#CBCBCB] p-3">Jamaspishvilinika12@gmail.com</p>
        </div>
    </div>
  )
}

export default Account;
