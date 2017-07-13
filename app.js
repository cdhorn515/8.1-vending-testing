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
  //update number of items in machine
  var itemsLeft = models.Customers.quantity - req.body.numberPurchased;

  var totalCostAmount = req.bosy.numberPurchased * models.Vendor.totalCost;
  Customers.update({_id: "snickers"}, {$set: {quantity: itemsLeft}}).then(function(){
    const vendor = new Vendor({type: 'snickers', quantity: numberPurchased, totalCost: totalCostAmount}).save().then(function(){
    });
    res.status(201).json();
  });
  //add money to vendor collection
    // const newVendor = new Vendor(snickers).save().then(function () {
   });


//GET /api/vendor/purchases - get a list of all purchases with their item and date/time
app.get("/api/vendor/purchases", function(req, res){
  Vendors.find({}).then(function(purchased) {
  res.json(purchased);
});
});

//GET /api/vendor/money - get a total amount of money accepted by the machine

app.get("/api/vendor/money", function(req, res){
  Vendors.find({}).then(function(totalInVending) {
    var total = 0;
    for (var i = 0; i<totalInVending.length; i++){
      total += totalInVending[i].totalCost;
    }
  res.json(total);
});
});

//PUT /api/vendor/items/:itemId - update item quantity, description, and cost
app.patch('/api/vendor/items/:itemId', function(req, res){
  Customers.update({type: "snickers"}, {$set: {price: 65}}).then(function(item){
    res.status(200).json({});
});
});

app.listen(3000, function (req, res){
  console.log("success");
});

module.exports = app;
