const mongoose = require("mongoose");

const FeedBackSchema = mongoose.Schema({
    id:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    product_name:{
        type:String,
        require:false
    },
   product_image: {
        type:String,
        require:false,

    },
    user_image:{
        type:String,
        require:false,
    },
    user_opinion:{
        type:String,
        require:true,
    },
    rating:{
        type:Number,
        require:false,
    },
    date:{
        type:String,
        require:false,
    },
    yes:{
        type:Number,
    },
    no:{
        type:Number
    }

})
module.exports = FeedBackSchema;