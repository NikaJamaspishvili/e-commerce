"use client"

import { useActionState, useEffect } from "react";


import { checkGoogleUser,googleRegisterUser } from "@/actions/googleAuth/googleAuth";


const page = () => {
 const [state,action,pending] = useActionState(googleRegisterUser);

 useEffect(() => {

    // Define the async function inside useEffect
    async function check() {
      try {
        const result = await checkGoogleUser();
        console.log(result);
      } catch (error) {
        console.error("Error checking user:", error);
      }
    }

      check();
  }, []);
  
 

 return <form action={action}>
        <input name="username" min={3} max={16} required pattern="[A-Za-z0-9]+" title="Only letters and numbers are allowed" type="text" placeholder="Choose Username..."/>
        <p>{state?.errors?.username[0]}</p>
        <button>{pending ? "Loading..." : "Submit"}</button>
        </form>
}

export default page;
