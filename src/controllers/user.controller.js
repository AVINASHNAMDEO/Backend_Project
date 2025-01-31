// import {asyncHandler} from "../utils/asyncHandler";

// const registerUser = asyncHandler( async(req,res)=>{
//     res.status(200).json({message : "ok"})
// })


// export {registerUser}

import { asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/User.models.js"
import { uploadOnCloudinary } from '../utils/Cloudinary.js';

import {ApiResponse} from "../utils/ApiResponse.js"

const registerUser = asyncHandler(async(req,res)=>{
    // res.status(200).json({message:"ok"})

    //1.  get user details from frontend
    // 2. validation - not empty
    //3.  check if user already exist : username,email
    // 4. check for images , check for avatar
    // 5. upload them to cloudinary ,avatar
    // 6. create user object - create entry in db
    //7.  remove password and refresh token field from response
    //8.  check for user creation
    //9.  return response

   const {fullName,email,username,password} =  req.body
   console.log("email :",email);

   if([fullName,email,username,password].some((field)=>
field?.trim() === "")
){
    throw new ApiError(400,"All fields are required")
   }

//   const existedUser = await User.findOne({
//     $or : [{username},{email}]
//    })

//    if(existedUser){
//     throw new ApiError(409, "this User already exist!!")
//    }

const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  
  if (existedUser) {
    console.log(existedUser);
    throw new ApiError(409, "This user already exists!");
    
    
  }
  



  const avatarLocalPath = req.files?.avatar[0]?.path ;
  const coverImagePath = req.files?.coverImage[0]?.path;

  if(!avatarLocalPath){
    throw new ApiError(400, "Avatar file is required")
  }

const avatar =  await uploadOnCloudinary(avatarLocalPath)
const coverImage = await uploadOnCloudinary(coverImagePath)

if(!avatar){
    throw new ApiError(400, "Avatar file is required")
}

const user = await User.create({
    fullName,
    avatar : avatar.url,
    coverImage : coverImage?.url || "",
    email,
    password,
    username : username.toLowerCase()
})

const createdUser = await User.findById(user._id).select(
    "-password -refreshToken" 
)

if(!createdUser){
    throw new ApiError(500 , "something went wrong while registering a user")
}


return res.status(201).json(
    new ApiResponse(200,createdUser,"User Registered Successfully")
)

   
})

export {registerUser}