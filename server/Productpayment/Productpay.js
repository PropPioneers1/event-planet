

const express = require("express");
const SSLCommerzPayment = require("sslcommerz-lts");
const Productsheema=require('../schemas/ProductpayScheema')
const mongoose = require("mongoose");
const Productpay = mongoose.model("Productpay", Productsheema);

const store_id = "event65c08b7004f38";
const store_passwd = "event65c08b7004f38@ssl";
const is_live = false;

const router = express.Router();

router.get("/validate", (req, res) => {
  const data = {
    val_id: req.query.val_id,
  };
  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz
    .validate(data)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Error in SSLCommerz validation:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

router.get("/initiate-refund", (req, res) => {
  const data = {
    refund_amount: req.query.refund_amount,
    refund_remarks: req.query.refund_remarks,
    bank_tran_id: req.query.bank_tran_id,
    refe_id: req.query.refe_id,
  };
  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz
    .initiateRefund(data)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Error in initiating refund:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

router.post("/", async (req, res) => {
  try {
    const datasfront = req.body;
    const tran_id = new mongoose.Types.ObjectId().toString();
console.log(datasfront);
    const paymentData = {
      mobileNumber: datasfront.phone,
      eventName: datasfront.name,
      // eventid:datasfront.poductid,
      cus_email: datasfront.email,
      currency: datasfront.currency,
      total_amount: datasfront.totalAmount,
      from:datasfront.from,
      success_url: `http://localhost:5000/payment/successful/${tran_id}`,
      fail_url: "http://localhost:5173/fail",
      paidstatus: "payment pending",
      tran_id: tran_id,
      
    };

    const payment = new Productpay(datasfront );
    await payment.save();

    const sslczData = {
      total_amount:paymentData.total_amount,
      currency:paymentData.currency,
      tran_id: tran_id,
      success_url: `http://localhost:5000/payment/success/${tran_id}`,
      fail_url: `http://localhost:5000/payment/failure/${tran_id}`,
      cancel_url: "http://localhost:5173/cancel",
      ipn_url: "http://localhost:5173/ipn",
      shipping_method: "Courier",
      product_name:paymentData.eventName,
      cus_email:paymentData.cus_email,
      product_category: "Electronic",
      product_profile: "general",
      cus_name: "Customer Name",
      cus_email:paymentData.cus_email,
      cus_add1: "Dhaka",
      cus_add2: "Dhaka",
      cus_city: "Dhaka",
      cus_state: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      cus_phone: "01711111111",
      cus_fax: "01711111111",
      ship_name: "Customer Name",
      ship_add1: "Dhaka",
      ship_add2: "Dhaka",
      ship_city: "Dhaka",
      ship_state: "Dhaka",
      ship_postcode: 1000,
      ship_country: "Bangladesh",
    };

    try {
      const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
      const apiResponse = await sslcz.init(sslczData);
      console.log(apiResponse);
      let GatewayPageURL = apiResponse.GatewayPageURL;
      res.status(200).json({ url: GatewayPageURL });
    } catch (error) {
      console.error("Error initializing SSLCommerzPayment:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } catch (error) {
    console.error("Error initializing payment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// router.post("/success/:tran_id", async (req, res) => {
//   try {
//     const { tran_id } = req.params; // Extract the transaction ID from req.params
//     console.log("Transaction ID:", tran_id); // Check if the transaction ID is correct

//     // Update the payment document
//     const payment = await Payment.findOneAndUpdate(
//       { tran_id: tran_id, $or: [{ paidstatus: 'payment pending' }, { paidstatus: 'payment failed' }] },
//       { $set: { paidstatus: "payment succeed" } },
//       { new: true }
//     );

//     // console.log("Updated Payment:", payment); // Check if the payment document is updated

//     if (!payment) {
//       return res.status(404).json({ error: "Payment not found" });
//     }

//     // Redirect to success page once payment status is updated
//     res.redirect(`http://localhost:5173/payment/successful/${tran_id}`);
//   } catch (error) {
//     console.error("Error updating payment status:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });
// router.post("/failure/:tran_id", async (req, res) => {
//   try {
//     const { tran_id } = req.params; // Extract the transaction ID from req.params
//     console.log("Transaction ID:", tran_id); // Check if the transaction ID is correct

//     // Update the payment document
//     const payment = await Payment.findOneAndUpdate(
//       { tran_id: tran_id },
//       { $set: { paidstatus: "payment failed" } },
//       { new: true }
//     );

//     console.log("Updated Payment:", payment); // Check if the payment document is updated

//     if (!payment) {
//       return res.status(404).json({ error: "Payment not found" });
//     }

//     // Redirect to success page once payment status is updated
//     res.redirect(`http://localhost:5173/payment/failure/${tran_id}`);
//   } catch (error) {
//     console.error("Error updating payment status:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// get success data
// router.get("/:tran_id", async (req, res) => {
//   const tran_id = req.params.tran_id;
//   try {
//     const result = await Payment.findOne({ tran_id: tran_id });
//     if (!result) {
//       return res.status(404).json({
//         error: "Transaction not found",
//       });
//     }
//     res.status(200).json({ result });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       error: "There was a server-side error",
//     });
//   }
// });
// router.get("/status/:ids", async (req, res) => {
//   const { ids } = req.params; // Correctly extract the 'ids' parameter
//   try {
//     const result = await Payment.findOne({ eventid: ids }, 'eventid paidstatus');
//     if (!result) {
//       return res.status(404).json({
//         error: "Event not found",
//       });
//     }
//     res.status(200).json({ eventid: result.eventid, paidstatus: result.paidstatus });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       error: "There was a server-side error",
//     });
//   }
// });






module.exports = router;
