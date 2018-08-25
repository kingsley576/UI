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

