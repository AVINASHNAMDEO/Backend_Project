import mongoose from "mongoose";
import {DB_Name} from "../constants.js"
import dotenv from 'dotenv'
dotenv.config({
    path : "./.env"
})


const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI }/${DB_Name}`)
        console.log(`\n MongoDB connected !! DB Host : ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("Mongodb connection failed",error);
        process.exit(1)
        
    }
}




export default connectDB;



