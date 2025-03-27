const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Integration Test: Nginx Web Server', () => {
  it('should return status 200 and the greeting from the HTML file', (done) => {
    chai.request('http://localhost:8080')  // ✅ Fixed the incorrect encoding
      .get('/')
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.text);  // ✅ Debug response content
        expect(res).to.have.status(200);  // ✅ Ensure server returns 200 status code
        expect(res.text).to.include('Hello from Docker!');  // ✅ Ensure HTML content is correct
        done();
      });
  });
});
