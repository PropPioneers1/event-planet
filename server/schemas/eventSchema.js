const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
    userName: String,
    email: String,
    phone: Number,
    organization: String,
    category: String,
    eventName: String,
    totalSeat: Number,
    state: String,
    city: String,
    venue: String,
    startDate: String,
    endDate: String,
    ticketPrice: Number,
    speakers: Array,
    eventPrice: Number,
    description: String,
    eventImages: Array,
    speakersImages: Array,
    status: String,
});

module.exports = EventSchema;
