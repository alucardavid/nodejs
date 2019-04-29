var assert = require('assert');
var Q = require('q');

describe('our test suite', () => {

    it('this should pass', () => {
        return Q.when('pass');
    });

    it('this should fail', () => {
        return Q.reject(new Error('fail'));
    });
});










