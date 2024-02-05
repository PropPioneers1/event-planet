// const express = require("express");
const mongoose = require("mongoose");
const express = require('express')
const SSLCommerzPayment = require('sslcommerz-lts')
const PaymentSchema = require('../schemas/PaymentScheema');


const Payment = mongoose.model("Payment", PaymentSchema);

// SSLCommerz configuration
const store_id = 'event65c08b7004f38';
const store_passwd = 'event65c08b7004f38@ssl';
const is_live = false;

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const datasfront = req.body;
    const tean_id = new mongoose.Types.ObjectId().toString();

    const data = {
      total_amount: datasfront.totalAmount,
      currency: datasfront.currency,
      cus_email: datasfront.cus_email,
      cus_phone: datasfront. mobileNUmber,
      tran_id: tean_id,
      success_url: `http://localhost:5000/success/${tean_id}`,
      fail_url: 'http://localhost:3030/fail',
      cancel_url: 'http://localhost:3030/cancel',
      ipn_url: 'http://localhost:3030/ipn',
      shipping_method: 'Courier',
      product_name: 'Computer.',
      product_category: 'Electronic',
      product_profile: 'general',
      cus_name: 'Customer Name',
      cus_add1: 'Dhaka',
      cus_add2: 'Dhaka',
      cus_city: 'Dhaka',
      cus_state: 'Dhaka',
      cus_postcode: '1000',
      cus_country: 'Bangladesh',
      cus_fax: '01711111111',
      ship_name: 'Customer Name',
      ship_add1: 'Dhaka',
      ship_add2: 'Dhaka',
      ship_city: 'Dhaka',
      ship_state: 'Dhaka',
      ship_postcode: 1000,
      ship_country: 'Bangladesh',
    };

    // Save payment data to MongoDB using Mongoose model
    const payment = new Payment(data);
    await payment.save();

    // Initiate payment with SSLCommerz
   try {
  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  const apiResponse = await sslcz.init(data);
  console.log('API Response:', apiResponse);
  let GatewayPageURL = apiResponse.GatewayPageURL;
  res.status(200).json({ url: GatewayPageURL });
  console.log('Redirecting to: ', GatewayPageURL);
} catch (error) {
  console.error('Error initializing SSLCommerzPayment:', error);
  res.status(500).json({ error: "Internal Server Error" });
}
  } catch (error) {
    console.error('Error initializing payment:', error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.post('/success/:id',async (req, res) => {
  console.log(req.params.id);
})
 


module.exports = router;
