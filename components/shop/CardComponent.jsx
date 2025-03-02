import ImageComponent from "./ImageComponent";
import Overlay from "./Overlay";

const CardComponent = async ({result}) => {

  return (
    <div key={result.id} className="relative group cursor-pointer flex flex-col gap-1">
    <Overlay productId={result.id}/>
    <section className="hidden absolute left-3 top-1 font-inter font-bold md:group-hover:flex transition-all duration-75 ease-in flex-col gap-2">
        <p className="text-[#121212] bg-white p-1 px-2 rounded-md">{result.condition}</p>
        <p className="bg-primaryGreen rounded-md text-[#FEFEFE] p-1 text-center">-50%</p>
    </section>

    {result.vr && <p className="absolute right-2 top-1 bg-purple-500 text-white rounded-md p-1 font-inter font-semibold">3D Model</p>}
    <button className="hidden absolute bg-primaryBlack text-[#FEFEFE] w-[85%] p-2 rounded-md bottom-24 left-1/2 translate-x-[-50%] font-inter md:group-hover:block transition-all duration-75 ease-in">Add to cart</button>

    <ImageComponent publicId={JSON.parse(result.photos)[0]} imageWidth={250} imageHeight={250}/>

    <div className="flex gap-1 mt-1">
        {[...Array.from({length:5})].map((_,index) => {
          if(index < result.stars){
            return <img src="/icons/Star.svg" key={index} alt="star icon" />
          }
            return <img className="w-4" src="/icons/EmptyStar.svg" key={index} alt="star icon" />
      })}
     </div>

     <p className="text-primaryBlack font-inter font-semibold text-md">{result.name}</p>
     <p className="text-[#121212] font-inter font-semibold text-sm">${result.price}</p>


     <button className="max-md:block hidden mx-auto bg-primaryBlack text-[#FEFEFE] w-[85%] mt-4 p-2 rounded-md font-inter transition-all duration-75 ease-in">Add to cart</button>
    </div>
  )
}

export default CardComponent
