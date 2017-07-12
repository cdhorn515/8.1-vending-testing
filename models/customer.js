
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  type: String,
  quantity: Number,
  price: Number
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
