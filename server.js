var assert = require('assert');
var List = require('./assert/list');

var list = new List();

console.log('Testing list count');
assert.equal(list.count(), 0);

console.log('Testing list add');
list.add({
    id: '1',
    value: 'some value'
});
assert.equal(list.count(), 1);

console.log('Testing list clear');
list.clear();
assert.equal(list.count(), 0);

console.log('Testing list getIds');
list.add({
    id: '2',
    value: 'David'
});
assert.equal(list.getIds()[0], '2');
list.clear();

console.log('Testing list remove');
list.add({
    id: '1',
    value: 'David'
});
list.remove('1');
assert.equal(list.count(), 0);

console.log('Testing list get');
list.add({
    id: '1',
    value: 'David'
});
assert.equal(list.get('1').value, 'David');
list.clear();

console.log('Testing list.add throws an error on invalid value');
assert.throws(function() {
    list.add({
        value: 'David'
    })
},
function (err) {
    return (err instanceof Error) && (err.message == 'item must have id');
});
















