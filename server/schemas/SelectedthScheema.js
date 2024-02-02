const mongoose = require("mongoose");

const SelectedthScheema = new mongoose.Schema({
  eventTheme: {
    type: String,
    required: true,
  },
  themeIndex: {
    type: Number,
    required: true,
  },
  guestName: {
    type: String,
    required: true,
  },
  organizationName: {
    type: String,
    required: true,
  },
  userRequirement: {
    type: String,
    required: true,
  },
  ClientEmailth: {
    type: String,
    required: true,
  },
});

module.exports = SelectedthScheema;
