const mongoose = require("mongoose");
const express = require("express");
const sendMail = require("./controller/sendMail");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
// const SSLCommerzPayment = require('sslcommerz-lts')

const QnaHandler = require("./QnaHandler/QnaHandler");
const selecthemeHandler = require("./SelectTheme/SelectthHandler");
const shopHandler = require("./shopHandler/shopHandler");
const blogHandler = require("./blogHandler/BlogHandler");
const eventHandler = require("./eventHandler/eventHandler");
const upComingDetailHandler = require("./upComingDetailHandler/detailHandler");
const feedbackHandler = require("./FeedbackHandler/feedbackHandler");

const paymenthandler = require("./paymentHandler/PaymentHandler");
// const notificationHandler = require("./NotificationTokenHandler/NotificationTokenHandler");

// const notificationHandler = require("./NotificationTokenHandler/NotificationTokenHandler");
const usersHandler = require("./usersHandler/usersHandler");
const LikesCommentsHandler = require("./LikesCommentsHandler/LikesCommentsHandler");
const ContactHandler = require("./ContactHnadler/Contacthandler");
const notificationHandler = require("./NotificationTokenHandler/NotificationTokenHandler");
const messageHandler = require("./MessageHandler/MessageHandler");
const likeDislikeHandler = require("./FeedbackHandler/likeDislikeHandler");
const Pymentticket=require ('./Pymentticket/Paymentticket.js')
const Productpay=require ('./Productpayment/Productpay.js')
// middleware
app.use(cors());
app.use(bodyParser.json());

// console.log(object);
const dbURI = `mongodb+srv://EventPlanet:6oNbcueawJevcwOk
@proppioneers.pzy67in.mongodb.net/Event-Planet`;
// Mongodb connection

mongoose.connect(
  `mongodb+srv://EventPlanet:6oNbcueawJevcwOk
@proppioneers.pzy67in.mongodb.net/Event-Planet`
)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// routes
app.get("/", (req, res) => {
  res.send("Your are in Event Planet serversite");
});
app.use("/shop", shopHandler);
app.use("/qna", QnaHandler);
app.use("/selectedthm", selecthemeHandler);
app.use("/blog", blogHandler);

app.use("/event", eventHandler);
app.use("/upcomingDetails", upComingDetailHandler);
app.use("/payment", paymenthandler);
app.use("/feedback", feedbackHandler);
// send confirmation mail if the user successfully booking a event

app.get("/sendEmail", sendMail);
app.use("/token", notificationHandler);
app.use("/users", usersHandler);
app.use("/likesComments", LikesCommentsHandler);
app.use("/contact", ContactHandler);
app.get("/sendEmail", sendMail);
app.use("/token", notificationHandler);
app.use("/message", messageHandler);
app.use("/likeDislike",likeDislikeHandler);
app.use("/ticketpay",Pymentticket);
app.use("/productpay",Productpay);

// Eroor handler

// _________________________________________________
// incorrect url error
app.use((req, res, next) => {
  res.status(404).send("Requested url was not found");
});
// developer code error handler (customized)
app.use((err, req, res, next) => {
  try {
    res.status(500).send(`There is an error in your code: ${err.message}`);
  } catch (error) {
    // Handle any errors that might occur during the response send process in  try
    res.status(500).send("Internal server error");
  }
});

// _________________________________________

app.listen(port, () => {
  console.log(` Event Planet Server is running on port: ${port}`);
});
