const expect = require('chai').expect;
const request = require('supertest');
const app = require("../app");
const Customer = require('../models/customer');
const Vendor = require('../models/vendor');

describe('basic API endpoint end tests', function(){

  beforeEach(function(done) {
    Customer.insertMany([
      {type: "candy", quantity: 10, price: 50},
      {type: "chips", quantity: 8, price: 60},
      {type: "soda", quantity: 6, price: 75}
    ]).then(done());
  });

    afterEach(function(done) {
      Customer.deleteMany({}).then(done());
    });

    // describe('customer api endpoint returns all items as json',
      it('user can get list of items, costs, and quantities', function(done) {
        request(app)
        .get("/api/customer/items")
        .expect(200)
        .expect(function(res){
          expect(res.body[0].type).to.equal("candy");
          expect(res.body[1].type).to.equal("chips");
          expect(res.body[2].type).to.equal("soda");
          expect(res.body.length).to.equal(3);
        })
        .end(done);
      });
    });


describe('basic model tests', function() {

  beforeEach(function(done) {
    Customer.deleteMany({}).then(done());
  });

  afterEach(function(done) {
    Customer.deleteMany({}).then(done());
  });

  it('can create a customer item in the db and find it', function(done) {
    //use to check for typos in test
    // expect(5).to.equal(4);
    const customer = new Customer({type: "candy", quantity: 10, price: 50})
    .save().then(function(newCustomer) {
      expect(newCustomer.type).to.equal('candy');
      expect(newCustomer.quantity).to.equal(10);
      expect(newCustomer.price).to.equal(50);
    });
      done();
  });
});

describe('customer buying items', function(){

  beforeEach(function(done) {
    Vendor.deleteMany({}).then(done());
  });

  //A customer should be able to buy an item using money
  //A customer can choose items from the vending machine
  it('customer can choose an item from the vending machine', function(done){
    request(app)
    .post('/api/customer/items/:id/purchases')
    .expect(200, {}, done);

    // const vendor = new Vendor({type: "chips", quantity: 3, price: 50})
    // .save().then(function(newVendor) {
    //   expect(newVendor.type).to.equal('chips');
    //
    // }).then(done());
  });

});


//A customer should be able to buy an item, paying more than the item is worth (imagine putting a dollar in a machine for a 65-cent item) and get correct change. This change is just an amount, not the actual coins.


//A customer should not be able to buy items that are not in the machine, but instead get an error


describe('basic api endpoint tests', function() {
  it('can access api endpoint and get success back', function(done) {
    request(app)
      .get('/api/sanity')
      //done is a function used in web request tests
       .expect(200, {}, done);
  });
});

describe('sanity test', function(){
  it('should run test', function(){
    expect(1).to.not.equal(2);
  });
});
