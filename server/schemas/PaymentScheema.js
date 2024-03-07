// PaymentSchema.js

const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
      userName: String,
      eventImage: String,
      eventTime:String,
      eventDate:String,
      eventLocation:String,
  mobileNumber: {
    type: String,
    // required: true
  },
  productName: {
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
  totalAmount: {
    type: Number,
    required: true
  },
  paidstatus: {
    type: String,
    default: 'payment pending'
  },
  tran_id: String,
  from:String,
  productid:String,
  total_amount:{
    type:Number,
  },
  ticketQuantity:{
    type:Number,
    required:true,
    default:0
  },
  productQuantity:String
});

module.exports = PaymentSchema;
