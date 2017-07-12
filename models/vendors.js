
const mongoose = require('mongoose');

const vendorsSchema = new mongoose.Schema({
  type: String,
  quantity: Number,
  price: Number,
  purchasedTime: {
    type: Date,
    default: Date.now
  }
});

const Vendors = mongoose.model("Vendors", vendorsSchema);

module.exports = Vendors;
