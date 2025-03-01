"use client";

import { CldImage } from "next-cloudinary"

function ImageComponent({publicId,imageWidth,imageHeight}) {
  return <CldImage priority className="w-auto h-auto" placeholder="blur" blurDataURL="/icons/Loading.svg" width={imageWidth} height={imageHeight} src={publicId} crop={"auto"} alt="product image"/>
}

export default ImageComponent;    
