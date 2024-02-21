
const express = require("express");
const SSLCommerzPayment = require("sslcommerz-lts");
const TicketpayShceema = require("../schemas/TicketScheemapay");
const mongoose = require("mongoose");
const TicketPayment= mongoose.model("Ticketpay", TicketpayShceema);

const router = express.Router();
const store_id = "event65c08b7004f38";
const store_passwd = "event65c08b7004f38@ssl";
const is_live = false;
router.post("/", async (req, res) => {
  
 
  try{
      const datasfront = req.body;
    console.log(datasfront); 
    const data = new TicketPayment(datasfront);
    console.log("feedback data",data)
    const result = await data.save();
    res.status(200).json({
        message:"Data received successfully",
        result,
    })
}
  catch (error) {
    console.error("Error initializing payment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/paymentticket", async (req, res) => {
  const datasfront = req.body;
  const tran_id = new mongoose.Types.ObjectId().toString();
  console.log(datasfront);
  const sslczData = {
    total_amount: datasfront.total_amount,
    currency: datasfront.currency,
    tran_id: tran_id,
    success_url: `http://localhost:5000/payment/success/${tran_id}`,
    fail_url: `http://localhost:5000/payment/failure/${tran_id}`,
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
  };

  try {
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    const apiResponse = await sslcz.init(sslczData);
    console.log(apiResponse);
    let GatewayPageURL = apiResponse.GatewayPageURL;
    res.status(200).json({ url: GatewayPageURL });

    // Update the payment document
    const payment = await TicketPayment.findOneAndUpdate(
      { cus_email: datasfront.cus_email },
      {
        $set: {
          currency: datasfront.currency,
          mobileNumber: datasfront.mobileNumber,
          paymentDate: datasfront.paymentDate,
          tran_id: tran_id,
          userAddres: datasfront.userAddres,
        },
      },
      { new: true }
    );

    console.log("Updated Payment:", payment);

    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }
  } catch (error) {
    console.error("Error initializing SSLCommerzPayment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});





router.put("/success/:tran_id", async (req, res) => {
  try {
    const { tran_id } = req.params;
    console.log("Transaction ID:", tran_id);

    // Update the payment document
    const payment = await TicketPayment.findOneAndUpdate(
      { tran_id: tran_id },
      { $set: { paidstatus: "TicketPayment succeed" } },
      { new: true }
    );

    console.log("Updated TicketPayment:", payment); 

    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }

    // Redirect to success page once payment status is updated
    res.redirect(`http://localhost:5173/payment/successful/${tran_id}`);
  } catch (error) {
    console.error("Error updating payment status:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// router.post("/failure/:tran_id", async (req, res) => {
//   try {
//     const { tran_id } = req.params; 
//     console.log("Transaction ID:", tran_id); 

//     // Update the payment document
//     const payment = await TicketPayment.findOneAndUpdate(
//       { tran_id: tran_id },
//       { $set: { paidstatus: "payment failed" } },
//       { new: true }
//     );

//     console.log("Updated Payment:", payment); 
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
