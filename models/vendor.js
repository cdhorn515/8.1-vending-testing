
const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  type: String,
  quantity: Number,
  price: Number,
  purchasedTime: {
    type: Date,
    default: Date.now
  }
});

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
