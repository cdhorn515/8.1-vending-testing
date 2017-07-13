const expect = require('chai').expect;
const request = require('supertest');
const app = require("../app");
const Customers = require('../models/customers');
const Vendors = require('../models/vendors');

// describe('basic API endpoint end tests', function(){
//
//   beforeEach(function(done) {
//     Vendors.insertMany([
//       {type: "snickers", quantity: 10, price: 65},
//       {type: "reeses peanut butter cups", quantity: 8, price: 65},
//       {type: "m&ms", quantity: 6, price: 65}
//     ]).then(done());
//   });
//
//     afterEach(function(done) {
//       Vendors.deleteMany({}).then(done());
//     });
//   });

describe('vendor api endpoint returns all items as json', function(){

  beforeEach(function(done) {
    Vendors.insertMany([
      {type: "snickers", quantity: 10, totalCost: 65},
      {type: "reeses peanut butter cups", quantity: 8, totalCost: 65},
      {type: "m&ms", quantity: 6, totalCost: 65}
    ]).then(done());
  });

    afterEach(function(done) {
      Vendors.deleteMany({}).then(done());
    });

    it('vendor can get list of purchases', function(done) {
      request(app)
      .get("/api/vendor/purchases")
      .expect(200)
      .expect(function(res){
        expect(res.body[0].type).to.equal("snickers");
        expect(res.body[1].type).to.equal("reeses peanut butter cups");
        expect(res.body[2].type).to.equal("m&ms");
        // expect(res.body.length).to.equal(3);
      })
      .end(done);
    });
  });



describe('basic model tests', function() {

  beforeEach(function(done) {
    Vendors.insertMany([
      {type: "snickers", quantity: 10, totalCost: 65},
      {type: "reeses peanut butter cups", quantity: 8, totalCost: 65},
      {type: "m&ms", quantity: 6, totalCost: 65}
    ]).then(done());
  });

    afterEach(function(done) {
      Vendors.deleteMany({}).then(done());
    });

  it('vendor can add a new item to the vending machine (db)', function(done) {
    //use to check for typos in test
    // expect(5).to.equal(4);
    const vendors = new Vendors({type: "snickers", quantity: 10, totalCost: 65})
    .save().then(function(newVendors) {
      expect(newVendors.type).to.equal('snickers');
      expect(newVendors.quantity).to.equal(10);
      expect(newVendors.totalCost).to.equal(65);
    });
      done();
  });
});

it('vendor should be able to see total amount of money in machine', function(done){
  request(app)
  .get('/api/vendor/money')
  .expect(200)
  .expect(function(res){
    expect(res.body).to.equal(195);
  })
  .end(done);
});


describe('basic vending tests', function() {

  beforeEach(function(done) {
    Customers.insertMany([
      {type: "snickers", quantity: 10, price: 65},
      {type: "reeses peanut butter cups", quantity: 8, price: 65},
      {type: "m&ms", quantity: 6, price: 65}
    ]).then(done());
  });

    afterEach(function(done) {
      Customers.deleteMany({}).then(done());
    });

it('vendor should be able to update the description, quantity, and costs of items in the machine', function(done){
  var testItem = {type: 'snickers', quantity: 2, price: 85};
  request(app)
  .patch('/api/vendor/items/' + testItem._id)
  .send({})
  .expect(200)
  .expect(function(res){
    expect(testItem.type).to.equal('snickers');
  })
  .end(done);
});

});


//A vendor should be


//A vendor should be able to add a new item to the machine
