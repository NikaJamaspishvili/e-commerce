import { logOutAction } from "@/actions/query/deleteFunctions"

function Logout() {

//using form to keep this a server component and still make the server action work

  return (
      <div className='w-full flex flex-col items-center justify-center gap-12 md:mt-0 mt-10'>
        <h1 className='font-poppins font-bold text-2xl text-center'>Are you sure you want to log out?</h1>
    <form action={logOutAction} className="w-full flex justify-center">
        <button className='bg-red-500 p-3 text-2xl text-white rounded-md w-4/5 max-w-[300px]'>Log Out</button>
    </form>
      </div>
  )
}

export default Logout
