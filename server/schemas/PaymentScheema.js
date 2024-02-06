const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  total_amount: { type: Number, required: true },
  currency: { type: String, required: true },
  cus_email: { type: String, required: true },
  cus_phone: { type: Number, },
  tran_id: { type: String, required: true, unique: true },
  success_url: { type: String, required: true },
  fail_url: { type: String, required: true },
  cancel_url: { type: String, required: true },
  ipn_url: { type: String, required: true },
  shipping_method: { type: String, required: true },
  product_name: { type: String, required: true },
  product_category: { type: String, required: true },
  product_profile: { type: String, required: true },
  cus_name: { type: String, required: true },
  cus_add1: { type: String, required: true },
  cus_add2: { type: String, required: true },
  cus_city: { type: String, required: true },
  cus_state: { type: String, required: true },
  cus_postcode: { type: String, required: true },
  cus_country: { type: String, required: true },
  cus_fax: { type: String, required: true },
  ship_name: { type: String, required: true },
  ship_add1: { type: String, required: true },
  ship_add2: { type: String, required: true },
  ship_city: { type: String, required: true },
  ship_state: { type: String, required: true },
  ship_postcode: { type: Number, required: true },
  ship_country: { type: String, required: true },
});

// const Payment = mongoose.model('Payment', paymentSchema);

module.exports = PaymentSchema;
