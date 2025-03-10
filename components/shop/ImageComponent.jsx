"use client";

import { CldImage } from "next-cloudinary"

function ImageComponent({publicId,imageWidth,imageHeight,extraClasses}) {
  return <CldImage priority className={`w-auto h-auto object-contain ${extraClasses}`} width={imageWidth} height={imageHeight} src={publicId} crop={"auto"} alt="product image"/>
}

export default ImageComponent;    
