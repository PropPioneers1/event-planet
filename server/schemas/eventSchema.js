const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  userName: String,
  email: String,
  phone: Number,
  organization: String,
  numberOfGuests: Number,
  // guestProfessions:String,j
  eventTime: String,
  category: String,
  eventName: String,
  totalSeat: Number,
  eventId:String,
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
  ticketSold:{type: Number, default:0} 
});

module.exports = EventSchema;

