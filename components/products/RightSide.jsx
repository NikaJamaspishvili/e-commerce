import ProductQuantity from "./ProductQuantity";

function RightSide({stars,name,description,price,count,productId}) {
  
  console.log(stars,name,description,price);
  
  return (
    <div className="w-full flex flex-col items-start gap-5">

     <section className="flex gap-2">
     {[...Array.from({length:5})].map((_,index) => {
          if(index < stars){
            return <img src="/icons/Star.svg" className="w-4" key={index} alt="star icon" />
          }
            return <img className="w-4" src="/icons/EmptyStar.svg" key={index} alt="star icon" />
      })}
     </section>

     <h1 className="text-5xl font-poppins text-primaryBlack">{name}</h1>
     <p className="font-inter font-light text-primaryGray text-lg">{description}</p>
     <p className="font-poppins text-primaryBlack font-medium text-2xl">${price}</p>

     <ProductQuantity price={price} count={count} productId={productId}/>
    </div>
  )
}

export default RightSide
