const mongoose = require("mongoose");

const FeedBackSchema = mongoose.Schema({
    email:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    rating:{
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
        type:String,
        require:true,
    },

})
module.exports = FeedBackSchema;