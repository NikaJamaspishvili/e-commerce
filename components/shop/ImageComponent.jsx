"use client";

import { CldImage } from "next-cloudinary"

function ImageComponent({publicId}) {
  return <CldImage priority className="w-auto h-auto" width={250} height={250} src={publicId} crop={"auto"} alt="product image"/>
}

export default ImageComponent;    
