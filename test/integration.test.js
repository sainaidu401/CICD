const request = require('supertest');
const expect = require('chai').expect;

describe('Integration Test: Nginx Web Server', function () {
  it('should return status 200 and the greeting from the HTML file', function (done) {
    request('http://localhost:8080') // Ensure this URL matches your running container
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.include('Hello from Docker!'); // Ensure this matches your actual HTML content
        done();
      });
  });
});
