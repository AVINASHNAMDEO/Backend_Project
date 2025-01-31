import express from 'express'
 const app = express()
import cors from "cors"
import cookieparser from "cookie-parser"
import dotenv from 'dotenv'

dotenv.config({
    path : './.env'
})

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))

app.use(express.json({limit : "16kb"}))

app.use(express.urlencoded({extended : true , limit : "16kb"}))

app.use(express.static("public"))

app.use(cookieparser())





// routes 
import userRouter from './routes/user.routes.js'

 //routes declaration

 app.use("/api/v1/users",userRouter)

 // http://localhost:8000/api/v1/users/register

export {app}