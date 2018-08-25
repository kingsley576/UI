const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app');

const should = chai.should();
chai.use(chaiHttp);

describe('questionGetAll', () => {
  it('should list ALL questions on /api/v1/questions GET', (done) => {
    chai.request(app)
      .get('/api/v1/questions')
      .end((err, res) => {
        res.should.have.status(200);
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
      .get('/api/v1/questions/questionId' + qstn.id)
      .send(qstn)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
      done();
  });
});

describe('postQuestion', () => {
  it('should POST questions on /api/v1/questions POST', (done) => {
    const qstn = {
      username: 'kingsley',
      gender: 'male',
      id: 8,
      title: 'cars',
      question: 'fastest cars'

    };

    chai.request(app)
      .post('/api/v1/questions')
      .send(qstn)
      .end((err, res) => {
     res.should.have.status(201);
        done();
      });
  });
});