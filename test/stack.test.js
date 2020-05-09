const assert = require('chai').assert;
const Stack = require('../stack');

describe('Stack', () => {
    it('should return empty stack', () => {
        const stack = new Stack();
        assert.equal(stack.storage, 0);
        assert.equal(stack.length, 0);
    });
    it('should return empty array', () => {
        const stack = new Stack();
        assert.equal(stack.isEmpty(), true);
        stack.add('value');
        assert.notEqual(stack.isEmpty(), true);
    });
    it('should add new value to storage', () =>{
        const stack = new Stack();
        stack.add('value');
        assert.equal(stack.storage[0], 'value');
        assert.equal(stack.length, 1);
        stack.add('newValue');
        assert.equal(stack.length, 2);
        assert.equal(stack.storage[1], 'newValue');
    });
    it('should remove last added value', () => {
        const stack = new Stack();
        stack.add('value');
        stack.add('otherValue');
        stack.add('anotherValue');
        assert.equal(JSON.stringify(stack.view()), JSON.stringify(['value', 'otherValue', 'anotherValue']));
        assert.equal(stack.length, 3);
        stack.remove();
        assert.equal(JSON.stringify(stack.view()), JSON.stringify(['value', 'otherValue']));
        assert.equal(stack.length, 2);
    });
    it('should clear storage', () => {
        const stack = new Stack();
        stack.add('value');
        stack.add('otherValue');
        stack.add('anotherValue');
        assert.equal(JSON.stringify(stack.view()), JSON.stringify(['value', 'otherValue', 'anotherValue']));
        assert.equal(stack.length, 3);
        stack.clear();
        assert.equal(JSON.stringify(stack.storage), JSON.stringify([]));
        assert.equal(stack.length, 0);
    });
    it('should return numbers of elements in stack', () => {
        const stack = new Stack();
        assert.equal(stack.getLength(), 0);
        stack.add('value');
        stack.add('otherValue');
        assert.equal(stack.getLength(), 2);
    });
    it('should return all stack', () => {
        const stack = new Stack();
        stack.add('value');
        stack.add('otherValue');
        assert.equal(JSON.stringify(stack.storage), JSON.stringify(['value', 'otherValue']));
    });
});