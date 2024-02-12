const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: {
        type: String,
    },
    userEmail: {
        type: String,
        require:true
    },
    role: {
        type:String,
        require:true
    }
})

module.exports = userSchema;