const mongoose = require('mongoose');

const upcomingDetailSchema = mongoose.Schema({
    eventId: {
        type:Number,
        require:true
    },
    guestName: {
        type:String,
        require:true
    },
    guestEmail: {
        type:String,
        require:true
    },
    eventName: {
        type:String,
        require:true
    },
    eventDate: {
        type:String,
    },
    eventTime: {
        type:String,
        require:true
    },
    eventLocation: {
        type:String,
    },
    totalVipTicket: {
        type:Number,
    },
    totalNormalTicket: {
        type:Number,
    },
    tikectQuantity: {
        type:Number,
        require:true
    },
    vipTicketPrice: {
        type:Number,
        require:true
    },
    normalTicketPrice: {
        type:Number,
    },
    totalPrice: {
        type:Number,
        require:true
    }
})
module.exports = upcomingDetailSchema