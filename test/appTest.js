const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app');

const should = chai.should();
chai.use(chaiHttp);

describe('indexGetAll', function() {
  it('should list ALL questions on /index/v1 GET', function(done) {
  chai.request(app)
    .get('/index/v1')
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
});
});