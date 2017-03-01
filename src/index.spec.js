const expect = require('chai').expect;
const request = require('supertest');

const SERVER_URL = 'http://didyoumean1-int.epnet.com:8080/';

describe('http://didyoumean1-int.epnet.com:8080', () => {
  describe('GET /', () => {
    it('should return a 200 status code', (done) => {
      request(SERVER_URL)
        .get('/')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });

    it('should return text/html as content type', (done) => {
      request(SERVER_URL)
        .get('/')
        .expect('Content-Type', 'text/html', done);
    });

    it('should return response body with a "dym server" title', (done) => {
      const header = "dym Server";

      request(SERVER_URL)
        .get('/')
        .end((err, res) => {
          expect(res.text).to.include(header);
          done();
        });
    });
  });

  describe('GET /dym', () => {
    const DYM_ENDPOINT = `${SERVER_URL}/dym`;

    it('should return a 200 status code', (done) => {
      request(DYM_ENDPOINT)
        .get('/')
        .expect(200, done);
    });

    it('should have a "DYM Service" header', (done) => {
      const header = 'DYM Service';

      request(DYM_ENDPOINT)
        .get('/')
        .end((err, res) => {
          expect(res.text).to.include(header);
          done();
        });
    });
  });
});

