"use client";

import { CldImage } from "next-cloudinary"

function ImageComponent({publicId}) {
  return <CldImage priority className="w-auto h-auto" width={200} height={200} src={publicId} crop={"fill"} alt="product image"/>
}

export default ImageComponent;    
