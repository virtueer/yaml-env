const config = require('../index.js');
config('test/.env');

var assert = require('assert');
describe('Is envirnment loaded successfully', function () {
  it('should return test', function () {
    assert.equal(process.env.example, "test");
  });

  it('should return true object', function () {
    assert.deepEqual(
      process.env.db,
      {
        host: 'localhost',
        port: 27017,
        access: [
          "access1", 2, true, null,
          { nested: [true, false] }
        ]
      }
    );
  });
});