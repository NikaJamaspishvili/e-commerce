"use server";

import Menu from "@/components/profile/Menu";
import Account from "@/components/profile/Account";
import Logout from "@/components/profile/Logout";
import Conditional from "@/components/profile/Conditional";

import { FetchProfileData } from "@/actions/query/fetchFunctions";

const page = async ({params}) => {

 const { slug } = await params;
 
 const data = await FetchProfileData();
 console.log(data);

  return (
    <div className="pt-40 max-w-[500px] mx-auto md:max-w-none md:mx-0">
      <h1 className="text-center font-poppins text-4xl md:text-5xl">My Account</h1>
      <section className="w-5/6 mx-auto md:flex md:gap-16 md:mt-16">
     <Menu value={slug} data={data}/>

    {slug === "account" && <Account data={data}/>}
    {slug === "logout" && <Logout />}
    {/* this checks which route user is on and renders components dynamically */}
    <Conditional variable={slug}/>

      </section>
    </div>
  )
}

export default page;
