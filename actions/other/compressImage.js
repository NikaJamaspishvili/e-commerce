"use client";

import imageCompression from "browser-image-compression";

export async function reduceImageSize(image){
    //compresses the image
  
      const options = {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 1920,
        useWebWorker: true
      }
  
      try {
        const compressedFile = await imageCompression(image, options);
  
       // console.log('everything ended fine',compressedFile)
        return compressedFile;
      } catch (error) {
        console.log(error);
      }
  
    }