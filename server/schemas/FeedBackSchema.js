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
    product_name:{
        type:String,
        require:true
    },
   product_image: {
        type:String,
        require:true,
    },
    user_image:{
        type:String,
    },
    user_opinion:{
        type:Number,
        require:true,
    },

})
module.exports = FeedBackSchema;