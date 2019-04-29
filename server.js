var assert = require('assert');

describe('our test suite', () => {

    it('this should pass', done => {
        setTimeout(() => {
            done();
        }, 500);
    });

    it('this should fail', done => {
        setTimeout(() => {
            done(new Error('fail'));
        }, 500);
    });
});










