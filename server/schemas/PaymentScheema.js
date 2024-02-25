// PaymentSchema.js

const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  mobileNumber: {
    type: String,
    // required: true
  },
  eventName: {
    type: String,
    required: true
  },
  cus_email: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  total_amount: {
    type: Number,
    required: true
  },
  // success_url: {
  //   type: String,
  //   required: true
  // },
  // fail_url: {
  //   type: String,
  //   required: true
  // },
  paidstatus: {
    type: String,
    default: 'payment pending'
  },
  tran_id: String,
  from:String,
  eventid:String,
  total_amount:{
    type:Number,
    required:false
  },
  ticketquantity:{
    type:Number,
    required:false
  }
});

module.exports = PaymentSchema;
