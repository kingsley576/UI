const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app');

const should = chai.should();
chai.use(chaiHttp);

describe('indexGetAll', function() {
  it('should list ALL questions on /index/v1 GET', (done) => {
  chai.request(app)
    .get('/index/v1')
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
});
});

describe('postQuestion', function() {
  it('should POST questions on /question/v1 POST', (done) => {

  	const qstn = {
      username: "kingsley",
      gender: "male",
      id: 8,
      title: "cars",
      question: "fastest cars"

  }

  chai.request(app)
    .post('/question/v1')
    .send(qstn)
    .end((err, res) => {
	      res.should.have.status(201);
      done();
    });
});
});

describe('PostAnAnswer', function() {
  it('should POST an answer to a question', (done) => {
  
  const ansr = {
      username: "Michael",
      gender: "Male",
      id: 9,
      answer: "Bugatti"

  };
  chai.request(app)
    .post('/answer')
    .send(ansr)
    .end(function(err, res){
      res.should.have.status(201);
      res.body.should.have.property('question');
      res.body.should.have.property('answer');
      done();
    });
});
});