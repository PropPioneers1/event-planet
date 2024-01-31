const mongoose = require('mongoose');

const shopCartSchema = mongoose.Schema({
    email: String,
     image: {
        type: String,
        required: true
    },
    quantity:{
        type:Number,
        
    },
    title:{
        type:String,
        required:true
    },

    price: {
        type: Number,
        min: 100,
        max: 999,
        required: true
    },
   
})

module.exports = shopCartSchema;