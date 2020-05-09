const assert = require('chai').assert;
const Set = require('../set');

describe('Set', () => {
    it('should return empty set', () => {
        const set = new Set();
        assert.equal(JSON.stringify(set.data), JSON.stringify([]));
    });
    it('should check if set has this value', () => {
        const set = new Set();
        assert.equal(set.has('value'), false);
        set.insert('value');
        assert.equal(set.has('value'), true);
    });
    it('should remove value from set', () => {
        const set = new Set();
        set.insert('value');
        set.insert('otherValue');
        set.insert('anotherValue');
        assert.equal(JSON.stringify(set.view()), JSON.stringify(['value', 'otherValue', 'anotherValue']));
        assert.equal(set.getLength(), 3);
        set.remove('otherValue');
        assert.equal(JSON.stringify(set.view()), JSON.stringify(['value', 'anotherValue']));
        assert.equal(set.has('otherValue'), false);
        assert.equal(set.getLength(), 2);
    });
    // it('should return new set with values which are in to compared sets', () => {
    //     const set = new Set();
    //     const otherSet = new Set();
    //     set.insert(12);
    //     set.insert(15);
    //     set.insert(4);
    //     otherSet.insert(4);
    //     otherSet.insert(15);
    //     otherSet.insert(55);
    //     set.intersect(otherSet);
    //     assert.equal(this.toReturn.length, 4);
    // });
});