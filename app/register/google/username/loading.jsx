import Loader from "@/components/reusable/Loader"

export default function Loading(){
return <div className="fixed w-full h-full bg-white text-black flex items-center justify-center left-0">
    <Loader />
    </div>
}