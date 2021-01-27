var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
  it('respond with hello world', function(done) {
    request(app).get('/').expect('hey world', done);
  });
});

describe('GET /data', function() {
  it('respond with hello world', function(done) {
    request(app).get('/').expect({data: {msg: "yo"}}, done);
  });
});
