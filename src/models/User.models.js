import mongoose , {Schema} from "mongoose";   
import  JsonWebTokenError  from "jsonwebtoken";
import bcrypt from "bcrypt"

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        index : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
       
    },
   fullName : {
        type : String,
        required : true,
        trim : true,
        index : true 
    },
    avatar : {
        type : String ,// cloudary url
        default : "/images.png"

     },
     coverImage : {
        type : String // cloudary url
     },
     watchHistory : [
        {
            type : Schema.Types.ObjectId,
            ref : "Video"
        }
    ],
    password : {
        type : String,
        required :[true, "Password is required"],
    },
    refreshToken : {
        type : String
    }
},{timestamps: true})

// userSchema.pre("save",async function(next){
//     if(!this.isModified("password")){
//         return next()
//     }
//     this.password =  await bcrypt.hash(this.password , 10)
//     next()
// })

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        next(error);
    }
});





// userSchema.methods.comparePassword = async function(password){
//     return await bcrypt.compare(password , this.password)
// }

// Method to compare passwords
userSchema.methods.comparePassword = async function (inputPassword) {
    try {
        return await bcrypt.compare(inputPassword, this.password);
    } catch (error) {
        throw new Error(error);
    }
};





userSchema.methods.generateAccesssToken = function(){
    JsonWebTokenError.sign({
        _id : this._id,
        email : this.email, 
        username : this.username,
        fullName : this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn :process.env.ACCESS_TOKEN_EXPIRY
    }

)
}
userSchema.methods.generateRefreshToken = function(){
    JsonWebTokenError.sign({
        _id : this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn :process.env.REFRESH_TOKEN_EXPIRY
    }

)
}


export const User = mongoose.model("User" , userSchema)