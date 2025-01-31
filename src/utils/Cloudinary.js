import { v2 as cloudinary } from "cloudinary";
import fs from "node:fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload an image
export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("File uploaded to Cloudinary");
    return response.url; // Return the uploaded file URL
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    fs.unlinkSync(localFilePath); // Remove the locally saved temporary file
    return null;
  }
};





































// import {v2 as cloudinary} from "cloudinary"
// import fs from 'node:fs'

// cloudinary.config({
//     cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
//     api_key :process.env.CLOUDINARY_API_KEY,   
//     api_secret : process.env.CLOUDINARY_API_SECRET 
// });


// // Upload an image
// export const uploadOncloudinary = async (localfilePath) => {
//     try {
//         if (!localfilePath) return null 
//         //upload the file on cloudinary
//         const response = await cloudinary.uploader.upload(localfilePath,{resource_type : "auto"

//         })
//         //file has been uploaded
//         console.log('file is uploaded in cloudinary');
//         response.url();
//         return response;
        
//     } catch (error) {
//       fs.unlinkSync(localfilePath)  /*remove the locally saved temprary file as the upload operation got failed 
//       */
//      return null;
//     }
// }

    
    
// //  export {uploadOncloudinary}   


