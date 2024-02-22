// PaymentSchema.js

const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  mobileNumber: {

  },
  eventName: {
    type: String,

  },
  cus_email: {
    type: String,

  },
  currency: {
    type: String,

  },
  total_amount: {
    type: Number,

  },
  success_url: {
    type: String,

  },
  fail_url: {
    type: String,

  },
  paidstatus: {
    type: String,
    default: 'payment pending'
  },
  tran_id: String,
  username:String,
  paymentDate:String,
  ticketquantity:Number,
  eventid:String,
  userAddres:String,
  tran_id:String,
  from:String
});

module.exports = PaymentSchema;
