"use server";

import { resolveObjectURL } from "buffer";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(file){

  let arrayBuffer = await file.arrayBuffer();
  let buffer = new Uint8Array(arrayBuffer);


return await new Promise((resolve,reject)=>{
    cloudinary.uploader.upload_stream({folder:"3elegant."},(error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }).end(buffer);
 });

}