"use client";

import { useActionState,useEffect,useRef,useState } from "react";

import { FaAsterisk } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { reduceImageSize } from "@/actions/other/compressImage";

import { Addproducts } from "@/actions/query/postFunctions";

function AddProducts() {

  const [imagePreviews, setImagePreviews] = useState(["","",""]);
  const [categories,setCategories] = useState([]);

  const updatedAddProducts = Addproducts.bind(null,{imagePreviews,categories});

  const [state,action,isPending] = useActionState(updatedAddProducts,null);

  useEffect(() => {
   
  if(isPending === true){
    setImagePreviews(["","",""]);
    setCategories([]);
  }

  }, [isPending]);

  let imageInputRef = useRef();
  let inputCategoryArray = [
   "Bedroom",
   "Living Room",
   "Kitchen",
   "Dining Room",
   "Bathroom",
   "Storage Room"
  ];

  async function handleFileChange(event) {
  let array = [...imagePreviews];
  let emptyIndex = array.findIndex((result) => result === "");

  if(emptyIndex !== -1){
    const file = event.target.files[0];
   // console.log(file);
   let compressedFile = await reduceImageSize(file);
   console.log(compressedFile);

    array[emptyIndex] = {url:URL.createObjectURL(compressedFile), file:compressedFile};
    setImagePreviews(array);
    
  }
  }

  function removeImage(index) {
    let array = [...imagePreviews];
    array[index] = "";
    setImagePreviews(array);
  }

  function handleCategoryClick(index) {

    let array = [...categories];
    let categoryExists = array.find(result => result === inputCategoryArray[index]);
    if(categoryExists){
      array = array.filter(result => result !== inputCategoryArray[index]);
    }else{
      array.push(inputCategoryArray[index]);
    }

    console.log(array);
    setCategories(array);
  }


  return <form action={action} className="w-full flex flex-col gap-5 items-center mt-8">
        <section className="grid grid-cols-1 w-full justify-items-center lg:grid-cols-3 gap-5">
         {imagePreviews.map((result, index) => {
          if(result === ""){
            return <div className="cursor-pointer w-3/5 lg:w-full flex flex-col gap-4 p-5 items-center justify-center border border-primaryGray rounded-md shadow-xl" key={index} onClick={()=> imageInputRef.current.click()}>
            <h1 className="text-center font-semibold font-inter text-lg">{index === 0 ? "Upload Cover Image" : "Upload Product Image"}</h1>
            <img src="/icons/ImageHolder.svg" className="w-[80px]"/>
          </div>
          }else{
            return <div className="relative" key={index}>
            <img className="rounded-lg h-full object-cover" src={result.url} alt="preview" />
            <p onClick={()=>removeImage(index)} className="absolute top-1/2 right-1/2 translate-x-[50%] translate-y-[-50%] cursor-pointer rounded-full bg-errorColor text-white p-1 text-6xl"><IoMdClose /></p>
            </div>
          }
          })}

         {state?.errors?.productImage?.[0] && <h3 className="text-red-500 text-md font-inter">{state?.errors?.productImage?.[0]}</h3>}

         </section>

        <section className="flex flex-col gap-10 w-full mt-5">

        <div className="flex flex-col gap-2">
         <p className="flex text-sm gap-1 font-inter font-semibold">Product Name <span className="text-errorColor text-[8px]"><FaAsterisk/></span></p> 
         <input required name="product_name" type="text" className="border-2 text-primaryGray outline-none p-2" />
         {state?.errors?.productName?.[0] && <h3 className="text-red-500 text-md font-inter">{state?.errors?.productName?.[0]}</h3>}
        </div>

        <div className="flex flex-col gap-2">
         <p className="flex text-sm gap-1 font-inter font-semibold">Price <span className="text-errorColor text-[8px]"><FaAsterisk/></span> $</p> 
         <input required name="product_price" type="number" className="border-2 text-primaryGray outline-none p-2" />
         {state?.errors?.productPrice?.[0] && <h3 className="text-red-500 text-md font-inter">{state?.errors?.productPrice?.[0]}</h3>}
        </div>

        <div className="flex flex-col gap-2">
         <p className="flex text-sm gap-1 font-inter font-semibold">Condition <span className="text-errorColor text-[8px]"><FaAsterisk/></span></p> 
         <select required name="product_condition" className="border-2 text-primaryGray outline-none p-2 cursor-pointer">
          <option value="new">NEW</option>
          <option value="used">USED</option>
         </select>
         {state?.errors?.productCondition?.[0] && <h3 className="text-red-500 text-md font-inter">{state?.errors?.productCondition?.[0]}</h3>}
        </div>

        <div className="flex flex-col gap-2">
         <p className="flex text-sm gap-1 font-inter font-semibold">Categories <span className="text-errorColor text-[8px]"><FaAsterisk/></span></p> 
       
       <section className="grid grid-cols-2 gap-1 max-w-[300px]">
       
      {inputCategoryArray.map((result, index) => {
      return  <div key={index} className="flex gap-2 items-center">
      <input onClick={()=>handleCategoryClick(index)} type="checkbox" className="border-2 text-primaryGray outline-none p-1 w-5 h-5 cursor-pointer" placeholder="cehckbox" />
      <label className="text-primaryGray font-inter">{result}</label>
      </div>
      })}
       </section>
       {state?.errors?.productCategory?.[0] && <h3 className="text-red-500 text-md font-inter mt-2">{state?.errors?.productCategory?.[0]}</h3>} 
       </div>

        <div className="flex flex-col gap-2">
         <p className="flex text-sm gap-1 font-inter font-semibold">Description <span className="text-errorColor text-[8px]"><FaAsterisk/></span></p> 
         <textarea required name="product_description" type="number" maxLength={500} className="border-2 text-primaryBlack outline-none p-2 text-sm h-[200px]" />
         {state?.errors?.productDescription?.[0] && <h3 className="text-red-500 text-md font-inter">{state?.errors?.productDescription?.[0]}</h3>}
        </div>

        </section>
       
        <input type="file" formEncType="multipart/form-data" onChange={handleFileChange} accept="image/*" className="hidden" ref={imageInputRef} /> {/*this input is hidden and is used to trigger the file uploader*/}

        <button type="submit" disabled={isPending} className="w-4/5 rounded-md p-3 font-inter text-xl text-white bg-primaryGreen">{isPending ? "Loading...": "Submit"}</button>
        </form>
  
}

export default AddProducts;
