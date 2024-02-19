const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    },
    image: {
        type: String,
    },
    phone: {
        type: String,
    },
    language: {
        type: String
    },
    gender: {
        type: String
    },
    address: {
        type: String
    },
    about:{
        type:String
    }


})

module.exports = userSchema;