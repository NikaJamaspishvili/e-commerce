import Loader from "@/components/reusable/Loader"

export default function Loading(){
return <div className="fixed w-screen z-50 top-0 h-screen bg-white text-black flex items-center justify-center left-0">
    <Loader />
    </div>
}