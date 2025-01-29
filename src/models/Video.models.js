import mongoose , {Schema} from "mongoose";  
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
videoSchema = new Schema({
    videoFile : {
        type :String, //cloudary url
        required : true
    },
    thumbnail : {
        type :String ,
        required : true
    },
    title : {
        type :String ,
        required : true
    },
    description : {
        type :String ,
        required : true
    },
    duration : {
        type : Number,
        required : true
    },
    view : {
        type : Number,
        default : 0
    },
    ispublished : {
        type : Boolean,
        default : true
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }


    

    
},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)

export const video = mongoose.model("video" , videoSchema)