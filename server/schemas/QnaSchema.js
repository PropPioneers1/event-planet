const mongoose = require('mongoose');

const QnaSchema = new mongoose.Schema({
  organizationName: {
    type: String,
    required: true,
  },
  audienceSize: {
    type: Number,
    required: true,
    min: 20, 
  },
  useHotDeals: {
    type: String,
    required: true,
    enum: ['Yes', 'No'], 
  },
  selectedCardOrTicketPrice: {
    type: mongoose.Schema.Types.Mixed, 
    required: function () {
      return this.useHotDeals === 'Yes' ? false : true;
    },
  },
  otherDemands: {
    type: String,
  },
  numberOfGuests: {
    type: Number,
    required: true,
    min: 1, 
  },
  guestNames: {
    type: String,
    required: true,
  },
  guestProfessions: {
    type: String,
    required: true,
  },
  status:{
    type:String,
    enum:['pending']
  }
  
});



module.exports = QnaSchema ;