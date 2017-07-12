
const mongoose = require('mongoose');

const CustomersSchema = new mongoose.Schema({
  type: String,
  quantity: Number,
  price: Number
});

const Customers = mongoose.model("Customers", CustomersSchema);

module.exports = Customers;
