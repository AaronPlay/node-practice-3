var app = require('../app');
var should = require('should');
var request = require('supertest');

describe('test/test.js', function () {

  it('should return correct json format', function (done) {
<<<<<<< HEAD
    this.timeout(15000);
=======
    this.timeout(60000); // 60s 应该够了
>>>>>>> c7af35b0eb61d53cf0138c76bb11f31d6ab74cd6
    request(app)
      .get('/')
      .end(function (err, res) {
        res.status.should.equal(200);
        var topics = res.body;
<<<<<<< HEAD
        topics.should.be.an.instanceOf(Array);
=======
        topics.should.be.Array;
>>>>>>> c7af35b0eb61d53cf0138c76bb11f31d6ab74cd6

        topics.forEach(function (topic) {
          topic.should.have.keys(
            'title',
            'href',
            'comment1'
          );
        });
        done();
    });
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> c7af35b0eb61d53cf0138c76bb11f31d6ab74cd6
