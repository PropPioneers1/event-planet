const express = require("express");
const SSLCommerzPayment = require("sslcommerz-lts");
const PaymentSchema = require("../schemas/PaymentScheema"); // Corrected the spelling of "Schema"
const mongoose = require("mongoose");
const Payment = mongoose.model("Payment", PaymentSchema);
const eventSchema = require("../schemas/eventSchema");
const eventModel = mongoose.model("Event", eventSchema);
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
    datasfront.tran_id = tran_id;
    const payment = new Payment(datasfront);
    await payment.save();

    const sslczData = {
      total_amount: datasfront.totalAmount,
      currency: datasfront.currency,
      tran_id: tran_id,
      success_url: `https://server-orpin-alpha.vercel.app/payment/successful/${tran_id}`, 
      fail_url: `https://server-orpin-alpha.vercel.app/payment/failure/${tran_id}`, 
      cancel_url: "http://localhost:5173/cancel",
      ipn_url: "http://localhost:5173/ipn",
      shipping_method: "Courier",
      product_name: datasfront.productName,
      cus_email: datasfront.cus_email,
      product_category: "Electronic",
      product_profile: "general",
      cus_name: "Customer Name",
      cus_email: datasfront.cus_email,
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

router.post("/successful/:tran_id", async (req, res) => {
  try {
    const { tran_id } = req.params;
    console.log("Transaction ID:", tran_id);

    // Update the payment document
    const payment = await Payment.findOneAndUpdate(
      { tran_id: tran_id },
      { $set: { paidstatus: "payment succeed" } },
      { new: true }
    );

    if (!payment) {
      console.error("Payment not found for transaction ID:", tran_id);
      return res.status(404).json({ error: "Payment not found" });
    }

    // Check if payment.from is 'booking'
    if (payment.from === 'booking') {
      // Update event data only if payment.from is 'booking'
      const event = await eventModel.findOneAndUpdate(
        { _id: payment.productid }, // Find the document by its _id
        {
          $inc: {
            totalSeat: -payment.ticketQuantity, // Decrement totalSeat by ticketQuantity
            ticketSold: +payment.ticketQuantity // Increment ticketSold by ticketQuantity
          }
        },
        { new: true } // Return the updated document
      );

      console.log("Event updated successfully for booking:", event);

      if (!event) {
        // Rollback the payment status update if event is not found
        await Payment.findOneAndUpdate(
          { tran_id: tran_id },
          { $set: { paidstatus: "payment failed" } }
        );

        return res.status(404).json({ error: "Event not found" });
      }
    } else if (payment.from === 'creation') {
      // Update event data only if payment.from is 'creation'
      const event = await eventModel.findOneAndUpdate(
        { _id: payment.productid }, // Find the document by its _id
        {
          $set: { status: 'upcoming' } // Set status to 'upcoming'
        },
        { new: true } // Return the updated document
      );

      console.log("Event updated successfully for creation:", event);

      if (!event) {
        // Rollback the payment status update if event is not found
        await Payment.findOneAndUpdate(
          { tran_id: tran_id },
          { $set: { paidstatus: "payment failed" } }
        );

        return res.status(404).json({ error: "Event not found" });
      }
    }

    console.log("Payment status updated successfully.", payment);

    // Redirect to success page once payment status is updated
    res.redirect(`http://localhost:5173/payment/successful/${tran_id}`);

  } catch (error) {
    console.error("Error updating payment status:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});









router.post("/failure/:tran_id", async (req, res) => {
  try {
    const { tran_id } = req.params; // Extract the transaction ID from req.params
    console.log("Transaction ID:", tran_id); // Check if the transaction ID is correct

    // Update the payment document
    const payment = await Payment.findOneAndUpdate(
      { tran_id: tran_id },
      { $set: { paidstatus: "payment failed" } },
      { new: true }
    );

    console.log("Updated Payment:", payment); // Check if the payment document is updated

    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }

    // Redirect to failure page once payment status is updated
    res.redirect(`https://event-planet-9789f.web.app/payment/failure/${tran_id}`);
  } catch (error) {
    console.error("Error updating payment status:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get('/ticketsCount',async(req,res)=>{
  try {
    const ticketCount = await Payment.countDocuments({});

    res.status(200).send({ ticketCount });
  } catch (error) {
    console.log("Not Fount Block");
    res.status(500).json({ error: "internal server error" });
  }
})
// get success data
router.get("/:tran_id", async (req, res) => {
  const tran_id = req.params.tran_id;
  try {
    const result = await Payment.findOne({ tran_id: tran_id });
    if (!result) {
      return res.status(404).json({
        error: "Transaction not found",
      });
    }
    res.status(200).json({ result });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "There was a server-side error",
    });
  }
});

router.get("/status/:ids", async (req, res) => {
  const { ids } = req.params; // Correctly extract the 'ids' parameter
  try {
    const result = await Payment.findOne({ eventid: ids }, 'eventid paidstatus');
    if (!result) {
      return res.status(404).json({
        error: "Event not found",
      });
    }
    res.status(200).json({ eventid: result.eventid, paidstatus: result.paidstatus });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "There was a server-side error",
    });
  }
});

module.exports = router;