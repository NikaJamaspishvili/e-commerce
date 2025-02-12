function Orders() {
 let array = [
    {numberID:"#34",Dates:"October 17,2023", Status:"Delievered", Price: "$1234.00"},
    {numberID:"#40",Dates:"October 17,2023", Status:"Delievered", Price: "$1234.00"},
    {numberID:"#55",Dates:"October 17,2023", Status:"Delievered", Price: "$1234.00"},
    {numberID:"#60",Dates:"October 17,2023", Status:"Delievered", Price: "$1234.00"},
    {numberID:"#75",Dates:"October 17,2023", Status:"Delievered", Price: "$1234.00"},
];
  return (
    <div className="w-full mt-10 md:mt-0">
      <h1 className="font-inter font-semibold text-2xl text-[#000000]">Orders History</h1>

      {window.innerWidth > 768 && <table className="w-full mt-10">
        <thead>
        <tr className="border-b-2 border-[#E8ECEF] text-primaryGray text-left">
          <th className="font-light">Number ID</th>
          <th className="font-light">Dates</th>
          <th className="font-light">Status</th>
          <th className="font-light">Price</th>
        </tr>
        </thead>

        <tbody>
         {array.map((result)=>{
          return <tr key={result.numberID} className="mt-2 text-left text-primaryBlack font-inter">
            <td className="p-3 font-light">{result.numberID}</td>
            <td className="font-light">{result.Dates}</td>
            <td className="font-light">{result.Status}</td>
            <td className="font-light">{result.Price}</td>
          </tr>
         })}
        </tbody>
      </table>
}

     {window.innerWidth < 768 && <section className="md:hidden flex flex-col mt-5">
       {array.map((result,index)=>{
        return <div key={result.numberID} className="flex gap-20 border-b-2 border-[#E8ECEF] py-5">

          <div className='md:hidden flex flex-col gap-3 text-primaryGray font-inter'>
            <p>Number ID</p>
            <p>Dates</p>
            <p>Status</p>
            <p>Price</p>
        </div>

        <div className='flex font-inter w-full flex-col md:flex-row p-4 gap-3 md:justify-between text-primaryBlack'>
            <p>{result.numberID}</p>
            <p>{result.Dates}</p>
            <p>{result.Status}</p>
            <p>{result.Price}</p>
        </div>

        </div>
       })} 

        </section>}

    </div>
  )
}

export default Orders;
