const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
const QnaHandler=require('./QnaHandler/QnaHandler')
// const eventHandler=require('./eventHandler/eventHandler')
const shopHandler=require('./shopHandler/shopHandler')
const blogHandler=require('./blogHandler/BlogHandler')

const ChatRoute = require('./Routes/ChatRoute')
const MessageRoute = require('./Routes/MessageRoute')

// middleware
app.use(cors());
app.use(bodyParser.json());

// console.log(object);



// Mongodb connection
mongoose
  .connect(
    `mongodb+srv://EventPlanet:2LxqUuIzAi3v6496
@proppioneers.pzy67in.mongodb.net/Event-Planet`
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });





// routes
// app.use('/event',eventHandler)
app.use('/shop',shopHandler)

app.use('/qna',QnaHandler)
app.use('/blog',blogHandler)

// chat route use
app.use('/chat',ChatRoute)
app.use('/message',MessageRoute)


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
    res.status(500).send('Internal server error');
  }
});

// _________________________________________

app.listen(port, () => {
  console.log(` Event Planet Server is running on port: ${port}`);
});
