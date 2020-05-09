const assert = require('chai').assert;
const Queue = require('../queue');

describe('Queue', () => {
    it('should return true if queue is empty', () => {
        const queue = new Queue();
        assert.equal(queue.isEmpty(), true);
    });
    it('should add value in the end of the queue', () => {
        const queue = new Queue();
        queue.enqueue(15);
        assert.equal(JSON.stringify(queue.items), JSON.stringify([15]));
        queue.enqueue('value');
        assert.equal(queue.items[0], 15);
        assert.equal(queue.items[1], 'value');
    });
    it('should remove first value in queue', () => {
        const queue = new Queue();
        queue.enqueue(15);
        queue.enqueue(27);
        queue.enqueue('someValue');
        assert.equal(JSON.stringify(queue.items), JSON.stringify([15, 27, 'someValue']));
        queue.dequeue();
        assert.equal(JSON.stringify(queue.items), JSON.stringify([27, 'someValue']));
        queue.dequeue();
        assert.equal(JSON.stringify(queue.items), JSON.stringify(['someValue']));
    });
    it('should return first element if queue is not empty', () => {
        const queue = new Queue();
        assert.equal(queue.front(), 'Queue is empty');
        queue.enqueue(40);
        queue.enqueue(27);
        queue.enqueue(15);
        queue.enqueue(412);
        assert.equal(queue.front(), 40);
        queue.dequeue();
        assert.equal(queue.front(), 27);
    });
    it('should return all queue if queue is not empty', () => {
        const queue = new Queue();
        assert.equal(queue.printQueue(), 'Queue is empty');
        queue.enqueue('value');
        queue.enqueue(75);
        queue.enqueue('anotherValue');
        queue.enqueue(412);
        assert.equal(JSON.stringify(queue.printQueue()), JSON.stringify(['value', 75, 'anotherValue', 412]));
    });
    it('should clear queue and return empty array', () => {
        const queue = new Queue();
        queue.enqueue(40);
        queue.enqueue(27);
        queue.clear();
        assert.equal(JSON.stringify(queue.items), JSON.stringify([]));
    });
});