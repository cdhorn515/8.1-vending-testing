const expect = require('chai').expect;
const request = require('supertest');
const app = require("../app");
const Customers = require('../models/customers');
const Vendors = require('../models/customers');

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

    // describe('customer api endpoint returns all items as json',
    //   it('vendor can get list of items, costs, and quantities', function(done) {
    //     request(app)
    //     .get("/api/customer/items")
    //     .expect(200)
    //     .expect(function(res){
    //       expect(res.body[0].type).to.equal("candy");
    //       expect(res.body[1].type).to.equal("chips");
    //       expect(res.body[2].type).to.equal("soda");
    //       expect(res.body.length).to.equal(3);
    //     })
    //     .end(done);
    //   });
    // });


// describe('basic model tests', function() {
//
//   beforeEach(function(done) {
//     Vendors.deleteMany({}).then(done());
//   });
//
//     afterEach(function(done) {
//       Vendors.deleteMany({}).then(done());
//     });

//   it('vendor can add a new item to the vending machine (db)', function(done) {
//     //use to check for typos in test
//     // expect(5).to.equal(4);
//     const vendor = new Vendor({type: "candy", quantity: 10, price: 1})
//     .save().then(function(newCustomer) {
//       expect(newVendor.type).to.equal('candy');
//       expect(newVendor.quantity).to.equal(10);
//       expect(newVendor.price).to.equal(1);
//     });
//       done();
//   });
// });

//A vendor should be able to see total amount of money in machine


//GET /api/vendor/money - get a total amount of money accepted by the machine

//POST /api/vendor/items - add a new item not previously existing in the machine

//PUT /api/vendor/items/:itemId - update item quantity, description, and cost



//A vendor should be able to see a list of all purchases with their time of purchase


//A vendor should be able to update the description, quantity, and costs of items in the machine


//A vendor should be able to add a new item to the machine

// describe('basic api endpoint tests', function() {
//   it('can access api endpoint and get success back', (done) => {
//     request(app)
//       .get('/api/sanity')
//       //done is a function used in web request tests
//        .expect(200, {}, done);
//   });
// });
//
// describe('sanity test', function(){
//   it('should run test', function(){
//     expect(1).to.not.equal(2);
//   });
// });
// });
