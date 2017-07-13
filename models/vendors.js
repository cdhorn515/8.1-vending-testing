
const mongoose = require('mongoose');

const vendorsSchema = new mongoose.Schema({
  type: String,
  quantity: Number,
  totalCost: Number,
  purchasedTime: {
    type: Date,
    default: Date.now
  }
});

const Vendors = mongoose.model("Vendors", vendorsSchema);

module.exports = Vendors;
