const mongoose = require('mongoose');

const EventTaskSchema = new mongoose.Schema({
    boardName: {
        type: String,
        required: true
    },
    boardBgImg: {
        type: String,
        required: true
    },
    planer: {
        type: Object,
        required: true,
        name: String,
        email: String
    },
    task: {
        type: Object,
        required: true,
        todo: Array,
        progress: Array,
        completed: Array
    }
});



module.exports = EventTaskSchema
