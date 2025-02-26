import Loader from "@/components/reusable/Loader"

export default function Loading(){
return <div className="fixed top-0 w-screen h-screen z-50 bg-white text-black flex items-center justify-center left-0">
    <Loader />
    </div>
}