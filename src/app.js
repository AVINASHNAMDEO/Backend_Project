const app = require('express')
var cors = require('cors')
const cookieparser = require('cookie-parser')

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))

app.use(express.json({limit : "16kb"}))

app.use(express.urlencoded({extended : true , limit : "16kb"}))

app.use(express.static("public"))

app.use(cookieparser())

 
export {app}