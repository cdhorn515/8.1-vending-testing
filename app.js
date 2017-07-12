const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const parseurl = require('parseurl');
const Customers = require('./models/customers');
const Vendors = require('./models/vendors');
const express = require('express');
mongoose.Promise = require('bluebird');

const nodeEnv = process.env.NODE_ENV || "development";
const config = require("./config.json")[nodeEnv];

mongoose.connect(config.mongoURL);

const app = express();

// mongoose.connect('mongodb://localhost:27017/cdcvending');
//endpoints

 app.get("/api/sanity", function(req, res) {
   res.json({});
 });


//GET /api/customer/items - get a list of items
app.get("/api/customer/items", function(req, res){
  Customers.find({}).then(function(vending) {
  res.json(vending);
});
});

//POST /api/customer/items/:itemId/purchases - purchase an item using money
app.post("/api/customer/items/snickers/purchases", function(req,res) {
    // const newVendor = new Vendor(req.body).save().then(function () {
     res.json({});
   });


//GET /api/vendor/purchases - get a list of all purchases with their item and date/time
// app.get("/api/vendor/purchases", function(req, res){
//   Vendor.find({}).then(function(purchased) {
//   res.json(purchased);
// });
// });


app.listen(3000, function (req, res){
  console.log("success");
});

module.exports = app;
