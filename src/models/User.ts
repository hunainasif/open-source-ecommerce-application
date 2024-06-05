import mongoose from "mongoose";




const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    orders:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"order"
    },
    favouriteItems:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"product"

    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps:true})


export default mongoose.models?.User || mongoose.model("User",UserSchema)