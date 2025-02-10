"use client"

import { useActionState, useEffect,useState } from "react";


import { checkGoogleUser,googleRegisterUser } from "@/actions/googleAuth/googleAuth";


const page = () => {
 const [state,action,pending] = useActionState(googleRegisterUser);
 const [visible,setVisible] = useState(false);

 useEffect(() => {

    // Define the async function inside useEffect
    async function check() {
      try {
        const result = await checkGoogleUser();
        console.log(result);

        if(result){
          setVisible(true);
        }
      } catch (error) {
        console.error("Error checking user:", error);
      }
    }

      check();
  }, []);
  
 
if(visible){
  return <form action={action} className="mx-auto flex flex-col justify-center gap-2 w-[95%] h-screen items-center max-w-[450px]">
  <input className="border-2 border-primaryGray shadow-xl rounded-md p-3 font-inter outline-none text-primaryGray w-full" name="username" min={3} max={16} required pattern="[A-Za-z0-9]+" title="Only letters and numbers are allowed" type="text" placeholder="Choose Username..."/>
  <p className="text-errorColor text-center">{state?.errors?.username[0]}</p>
  <button className="rounded-md p-3 mt-2 font-inter text-white bg-primaryGreen w-full">{pending ? "Loading..." : "Submit"}</button>
  </form>
}
 
}

export default page;
