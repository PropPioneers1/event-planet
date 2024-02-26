const mongoose = require('mongoose');

// Define the schema
const TicketPaymentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  totalAmount: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number, // Changed to Number
    required: true
  },
  address: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['unpaid', 'paid'],
    default: 'unpaid'
  },

  from:String
});

// Create a model using the schema
// const TicketPayment = mongoose.model('TicketPayment', TicketPaymentSchema);

module.exports = TicketPaymentSchema;
