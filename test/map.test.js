const assert = require('chai').assert;
const Map = require('../map');

describe('Map', () => {
    it('should clear current map', () => {
        const map = new Map();
        map.add('key', 'value');
        map.clear();
        assert.equal(map.mapSize, '0');
    });
    it('should return true if key is exisiting and false in other case', () => {
        const map = new Map();
        assert.equal(map.has('someKey'), false);
        map.add('key', 'value');
        assert.equal(map.has('key'), true);
    });
    it('should add new key and value to object', () => {
        const map = new Map();
        assert.equal(map.has('testKey'), false);
        map.add('testKey', 'testValue');
        assert.equal(map.has('testKey'), true);
        assert.equal(JSON.stringify(map.values()),JSON.stringify(['testValue'])); //JSON stringify to compare 2 objects.
    });
    it('should remove value from object', () => {
        const map = new Map();
        map.add('someKey', 'someValue');
        assert.equal(map.has('someKey'), true);
        map.remove('someKey');
        assert.equal(map.has('someKey'), false);
    });
    it('should return a value of key', () => {
        const map = new Map();
        assert.equal(map.get('someKey'), undefined);
        map.add('someKey', 17);
        assert.equal(map.get('someKey'), 17);
    });
    it('should return size of object', () => {
        const map = new Map();
        assert.equal(map.mapSize, 0);
        map.add('someKey', 'someValue');
        map.add('otherKey', 'otherValue');
        assert.equal(map.mapSize, 2);
    });
    it('should return all keys', () => {
        const map = new Map();
        assert.equal(JSON.stringify(map.keys()), JSON.stringify([]));
        map.add('someKey', 'someValue');
        map.add('otherKey', 'otherValue');
        assert.equal(JSON.stringify(map.keys()), JSON.stringify(['someKey', 'otherKey']));
    });
    it('should return all values', () => {
        const map = new Map();
        assert.equal(JSON.stringify(map.values()), JSON.stringify([]));
        map.add('someKey', 455);
        map.add('otherKey', 'ABC');
        assert.equal(JSON.stringify(map.values()), JSON.stringify([455, 'ABC']));
    });
    it('should return all dictionary', () => {
        const map = new Map();
        assert.equal(map.viewAll(), undefined);
        map.add('someKey', 'someValue');
        assert.equal(map.viewAll(), 'someKey -> someValue');
    });
});


