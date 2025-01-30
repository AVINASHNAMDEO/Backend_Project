import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import {app} from './app.js'

dotenv.config({ path: './env' });
// import express from "express";
// const app = express()

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
        
    })
})
.catch((error)=>{
console.log("MongoDB connection failed !! ", error);

})





























// import dotenv from 'dotenv'
// require('dotenv').config()
// import dotenv from 'dotenv';
// dotenv.config();

// // require('dotenv').config({path:'./env'})
// const dotenv = require('dotenv');
// dotenv.config({ path: './env' });


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