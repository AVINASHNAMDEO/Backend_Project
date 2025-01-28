// import dotenv from 'dotenv'
// require('dotenv').config()
// import dotenv from 'dotenv';
// dotenv.config();

// // require('dotenv').config({path:'./env'})
// const dotenv = require('dotenv');
// dotenv.config({ path: './env' });
import dotenv from 'dotenv';
dotenv.config({ path: './env' });
import connectDB from "./db/index.js";

connectDB()

// dotenv.config({
//     path : './env'
// })


/*
import express from "express";
const app = express{};

(async()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        app.on("error",(error)=>{
            console.log("Error",error);
            throw error            
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT`);
            
        })
    } catch (error) {
        console.error({ERROR : 'internal server error' })
        throw err
    }
})()

*/