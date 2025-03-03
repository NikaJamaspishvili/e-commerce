"use client";

import { useEffect,useState } from "react";

import { fetchOrdersData } from "@/actions/query/fetchFunctions";

function Orders() {

  const [data,setData] = useState([]);

 useEffect(()=>{
  async function fetchData(){
    let data = await fetchOrdersData();
    console.log(data);
    setData(data);
  }

  fetchData();
 },[]);

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

  {window.innerWidth > 768 && <div className="w-full mt-10">
    <table className="w-full">
     <thead>
     <tr className="border-b-2 border-[#E8ECEF] text-primaryGray text-left">
       <th className="pb-2 font-light">Id</th>
       <th className="pb-2 font-light">Dates</th>
       <th className="py-2 font-light">Status</th>
       <th className="pb-2 font-light">Price</th>
     </tr>
     </thead>

     <tbody>
      {data.map((result)=>{
       return <tr key={result.id} className="mt-2 text-left text-primaryBlack font-inter border-b-2 border-[#E8ECEF]">
         <td className="p-3 py-6 font-light">#{result.id}</td>
         <td className="p-3 py-6 font-light">{result.createdAt}</td>
         <td className="p-3 py-6 font-light">Delievered</td>
         <td className="p-3 py-6 font-light">${result.total}</td>
       </tr>
      })}
     </tbody>
   </table>
   </div>}

       {window.innerWidth < 768 &&  <section className="flex flex-col mt-5 font-light">
       {data.map((result,index)=>{
        return <div key={result.id} className="flex gap-20 border-b-2 border-[#E8ECEF] py-5">

          <div className='md:hidden flex flex-col gap-3 text-primaryGray font-inter'>
            <p>Order Id</p>
            <p>Dates</p>
            <p>Status</p>
            <p>Price</p>
        </div>

        <div className='flex font-inter w-full flex-col md:flex-row p-4 gap-3 md:justify-between text-primaryBlack'>
            <p>#{result.id}</p>
            <p>{result.createdAt}</p>
            <p>Delievered</p>
            <p>${result.total}</p>
        </div>

        </div>
       })} 

        </section>}
    </div>
  )
}

export default Orders;
