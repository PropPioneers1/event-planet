const mongoose = require('mongoose');

const EventTaskSchema = new mongoose.Schema({
    boardName: {
        type: String,
        required: true
    },
    boardBgImg: {
        type: String,
    },
    planer: {
        type: Object,
        required: true,
        name: String,
        email: String
    },

    task: {
        type:Object,
        required:true,
        toDo: {
            type: Object,
            required: true,
        },
        progress: {
            type: Array,
            required: true,
        },
        completed: {
            type: Array,
            required: true,
        },
    },

});



module.exports = EventTaskSchema
