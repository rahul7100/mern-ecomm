import { model, Mongoose,Schema } from "mongoose";
const productschema=Schema({
    name:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true,

    },
    quantity:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
        required:true
    }
},
    {timestamps:true});

const product=Mongoose.model("products",productschema);
model.exports=product;
