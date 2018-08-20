const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app');

const should = chai.should();
chai.use(chaiHttp);

describe('indexGetAll', () => {
  it('should list ALL questions on /index/v1 GET', (done) => {
    chai.request(app)
      .get('/index/v1')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe('postQuestion', () => {
  it('should POST questions on /question/v1 POST', (done) => {
  	const qstn = {
      username: 'kingsley',
      gender: 'male',
      id: 8,
      title: 'cars',
      question: 'fastest cars'

    };

    chai.request(app)
      .post('/question/v1')
    .send(qstn)
      .end((err, res) => {
	      res.should.have.status(201);
        done();
      });
  });
});

describe('PostAnAnswer', () => {
  it('should POST an answer to a question', (done) => {	  
	  const ansr = {
	      username: 'Michael',
	      gender: 'Male',
	      id: 9,
	      answer: 'Bugatti'

	  };
    chai.request(app)
      .post('/answer')
      .send(ansr)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.have.property('question');
        res.body.should.have.property('answer');
        done();
      });
  });
});

describe('GetOneQuestion', () => {
  it('should GET one question', (done) => {
	  	const qstn = { 
	  		username: 'Ijeoma',
		    gender: 'Female',
		    id: '2',
		    title: 'Difference between SQL and NOSQL',
		    question: 'Please can someone explain the difference between SQL and NOSQL for me.'
	  	};
  		chai.request(app)
    	.get('/answer/' + qstn.id)
    	.send(qstn)
    	.end((err, res) => {
      	res.should.have.status(200);
        done();
    	});
  });
  	});

