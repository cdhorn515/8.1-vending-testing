const expect = require('chai').expect;
const request = require('supertest');
const app = require("../app");
const  Customers = require('../models/customers');
const Vendors = require('../models/vendors');

describe('basic API endpoint end tests', function(){

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

    // describe(' api endpoint returns all items as json',
      it('user can get list of items, costs, and quantities', function(done) {
        request(app)
        .get("/api/customer/items")
        .expect(200)
        .expect(function(res){
          expect(res.body[0].type).to.equal("snickers");
          expect(res.body[1].type).to.equal("reeses peanut butter cups");
          expect(res.body[2].type).to.equal("m&ms");
          expect(res.body.length).to.equal(3);
        })
        .end(done);
      });
    });
// end of basic endpoint tests

describe('basic model tests', function() {

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

  it('test should clean up after itself', function(done) {
    const customers = new Customers().save().then(function(newCustomer) {
      Customers.count().then(function(count){
        expect(count).to.equal(4);
      })
      .then(done());

    });
  });

  it('can create a item in the db and find it', function(done) {
    const customers = new Customers({type: "snickers", quantity: 10, price: 65})
    .save().then(function(newCustomers) {
      expect(newCustomers.type).to.equal('snickers');
      expect(newCustomers.quantity).to.equal(10);
      expect(newCustomers.price).to.equal(65);
          done();
    });

  });
});
// end of model tests

describe(' buying items', function(){

  beforeEach(function(done) {
    Vendors.deleteMany({}).then(done());
  });

  //A  can choose items from the vending machine
  it(' can choose an item from the vending machine', function(done){
    request(app)
    .post('/api/customer/items/snickers/purchases')
    .expect(201)
    .end(done);
    // const vendors = new Vendors({type: "m&ms", quantity: 3, price: 65})
    // .save().then(function(newVendors) {
    //   expect(newVendors.type).to.equal('m&ms');
    //
    // }).then(done());
  });
});
// end of buying items

//A  should be able to buy an item using money

//A  should be able to buy an item, paying more than the item is worth (imagine putting a dollar in a machine for a 65-cent item) and get correct change. This change is just an amount, not the actual coins.

//A  should not be able to buy items that are not in the machine, but instead get an error


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
