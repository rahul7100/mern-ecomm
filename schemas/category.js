import { Mongoose } from "mongoose";
import {mongoose,Schema} from "Mongoose";


const categorySchema=Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },

},{timestamp:true});

const category=Mongoose.model("Categories",categorySchema);
module.exports=category;