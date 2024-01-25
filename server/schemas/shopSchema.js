const mongoose=require('mongoose');



const shopSchema=mongoose.Schema({
    image:{
        type:String,
        required:true
    }, 
    title:{
        type: String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        min:100,
        max:999,
        required:true
    },
    rating:{
        type:Number
    }



})

module.exports=shopSchema;