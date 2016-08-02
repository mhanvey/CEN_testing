var should = require('should'),
    request = require('supertest'),
    express = require('../config/express'),
    Listing = require('../models/listings.server.model.js');

var app, agent, id;
var listing {
    name: 'Example',
    code: 'EX',
    address: '123 Sample Road, Gainesville, FL 32601, United States',
};


describe('Listings', function() {

  before(function(done) {
    app = express.init();
    agent = request.agent(app);

    done();
  });

  it('should get all listings', function(done) {
    agent.get('/api/listings')
    .end(function(err, res) {
        res.should.have.status(200);
        should.not.exist(err);
        should.exist(res.body._id);
        done();
      });
  });

  /*it('should be able to retrieve a single listing', function(done) {
    Listing.findOne({name: 'Library West'}, function(err, listing) {
      if(err) {
        console.log(err);
      } else {
        agent.get('/api/listings/' + listing._id)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            should.exist(res);
            res.body.name.should.equal('Library West');
            res.body.code.should.equal('LBW');
            res.body.address.should.equal('1545 W University Ave, Gainesville, FL 32603, United States');
            res.body._id.should.equal(listing._id.toString());
            done();
          });
      }
    });
  });*/

  it('should create a new listing', function(done) {
    agent.post(/api/listings)
    .send(listing)
    .end(function(err, res){
        res.should.have.status(200);
        should.not.exist(err);
        should.exist(res.body._id);
        res.body.name.should.equal('Example');
        res.body.code.should.equal('EX');
        res.body.address.should.equal('123 Sample Road, Gainesville, FL 32601, United States');
        done();
      });
  });

  it('should update a listing', function(done){
    var updatedListing = {
        name: 'Updated Example',
        code: 'UEX',
        address: '123 Update Ave, Gainesville, FL 32601, United States'
    };

    agent.put('/api/listings/' +id)
    .send(updatedListing)
    .end(function(err, res) {
        res.should.have.status(200);
        should.not.exist(err);
        should.exist(res.body._id);
        res.body.name.should.equal('Updated Example');
        res.body.code.should.equal('UEX');
        res.body.address.should.equal('123 Update Ave, Gainesville, FL 32601, United States');
        done();
      });
  });

 it('should delete a listing', function(done) {
    agent.delete('/api/listings/' +id)
    .end(function(err, res) {
        res.should.have.status(200);
        should.not.exist(err);
        should.exist(res.body._id);

        agent.get('/api/listings/' + id)
            .end(function(err, res) {
            res.should.have.status(400);
            done();
          });
      })
  });

  after(function(done) {
    if(id) {
      Listing.remove({_id: id}, function(err){
        if(err) throw err;
        done();
      })
    }
  });
});