const mongoose = require('mongoose');

const shopCartSchema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        max: 999,
        required: true
    },
    email: String



})

module.exports = shopCartSchema;