
const express = require("express");
const SSLCommerzPayment = require("sslcommerz-lts");
const TicketpayShceema = require("../schemas/TicketScheemapay");
const mongoose = require("mongoose");
const TicketPayment= mongoose.model("Ticketpay", TicketpayShceema);
const eventSchema = require("../schemas/eventSchema");
const eventModel = mongoose.model("Event", eventSchema);

const router = express.Router();
const store_id = "event65c08b7004f38";
const store_passwd = "event65c08b7004f38@ssl";
const is_live = false;
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
    const existingTicketPayment = await TicketPayment.findOne({
      eventid: datasfront.eventid,
      cus_email: datasfront.cus_email
    });
console.log(datasfront);
    if (existingTicketPayment) {
      // If the user has previously booked a ticket, update the ticket quantity and total
      const updatedTicketQuantity = datasfront.ticketquantity;
      const updatedTotalAmount = datasfront.total_amount;

      // Update the existing ticket payment record
      await TicketPayment.findOneAndUpdate(
        { eventid: datasfront.eventid},
        {
          $set: {
            ticketquantity: updatedTicketQuantity,
            total_amount: updatedTotalAmount
          }
        }
      );

      // Send success response
      return res.status(200).json({ message: "Ticket quantity and total updated successfully" });
    } else {
      // If the user is booking a ticket for the first time, return an error
      return res.status(400).json({ error: "Ticket not found for updating" });
    }
  } catch (error) {
    console.error("Error updating ticket payment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.post("/paymentticket", async (req, res) => {
  const datasfront = req.body;
  // const tran_id = new mongoose.Types.ObjectId().toString();
  console.log(datasfront);
  const sslczData = {
    total_amount: datasfront.total_amount,
    currency: datasfront.currency,
    tran_id: datasfront.tran_id,
    success_url: `http://localhost:5000/ticketpay/success/${datasfront.tran_id}`,
    fail_url: `http://localhost:5000/ticketpay/failure/${datasfront.tran_id}`,
    cancel_url: "http://localhost:5173/cancel",
    ipn_url: "http://localhost:5173/ipn",
    shipping_method: "Courier",
    product_name: datasfront.eventName,
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
  };console.log(datasfront);
  const payment = await TicketPayment.findOneAndUpdate(
    { tran_id: datasfront.tran_id},
    {
      $set: {
        currency: datasfront.currency,
        mobileNumber: datasfront.mobileNumber,
        paymentDate: datasfront.paymentDate,
        // tran_id: tran_id,
        userAddres: datasfront.userAddres,
      },
    },
    { new: true }
  );

  // console.log("Updated Payment:", payment);

  if (!payment) {
    return res.status(404).json({ error: "Paymen sst not found" });
  }
  try {
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    const apiResponse = await sslcz.init(sslczData);
    // console.log(apiResponse);
    let GatewayPageURL = apiResponse.GatewayPageURL;
    res.status(200).json({ url: GatewayPageURL });

    // Update the payment document

  } catch (error) {
    console.error("Error initializing SSLCommerzPayment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});





router.post("/success/:tran_id", async (req, res) => {
  try {
    const { tran_id } = req.params;

    // Update the payment document to mark it as successful
    const payment = await TicketPayment.findOneAndUpdate(
      { tran_id: tran_id },
      { $set: { paidstatus: "TicketPayment succeed" } },
      { new: true }
    );

    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }

    // Get the ticket information from the payment document
    const { eventid, ticketquantity } = payment;

    // Update the event's total seat by subtracting ticketquantity
    const event = await eventModel.findOneAndUpdate(
      { _id: eventid },
      { 
        $inc: { 
          totalSeat: -ticketquantity
        },
        $set: {
          ticketsSold: ticketquantity
        }
      },
      { new: true }
    );
    

    if (!event) {
      // Rollback the payment status update if event is not found
      await TicketPayment.findOneAndUpdate(
        { tran_id: tran_id },
        { $set: { paidstatus: "payment failed" } }
      );
      
      return res.status(404).json({ error: "Event not found" });
    }

    // Redirect to success page once payment status is updated and event seat is updated
    res.redirect(`http://localhost:5173/payment/successful/${tran_id}`);
  } catch (error) {
    console.error("Error updating payment status or event seat:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



router.post("/failure/:tran_id", async (req, res) => {
  try {
    const { tran_id } = req.params; 
    // console.log("Transaction ID:", tran_id); 

    // Update the payment document
    const payment = await TicketPayment.findOneAndUpdate(
      { tran_id: tran_id },
      { $set: { paidstatus: "payment failed" } },
      { new: true }
    );

    // console.log("Updated Payment:", payment); 
    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }

    // Redirect to success page once payment status is updated
    res.redirect(`http://localhost:5173/payment/failure/${tran_id}`);
  } catch (error) {
    console.error("Error updating payment status:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});










router.get("/:ids", async (req, res) => {
  const { ids } = req.params;

  try {
   
    const result = await TicketPayment.findOne({ eventid: ids});
    
    if (!result) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.status(200).json({ result });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/:email/:ids", async (req, res) => {
  const { ids, email } = req.params; 

  try {
    const result = await TicketPayment.findOne({ eventid: ids, cus_email: email });
    
    if (!result) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.status(200).json({ result });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});






module.exports = router;