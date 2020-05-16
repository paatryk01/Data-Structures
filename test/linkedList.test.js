const assert = require('chai').assert;
const LinkedList = require('../linkedList');
// const Node = require('../LinkedListNode');

describe('LinkedList', () => {
    it('should return empty list', () => {
        const list = new LinkedList();
        assert.equal(list.isEmpty(), true);
    });
    it('should add new node at the end of the list linkedlist', () => {
        const list = new LinkedList();
        list.addToTail(15);
        assert.equal(list.head.value, 15);
        list.addToTail(42);
        assert.equal(list.tail.value, 42);
    });
    it('should remove the last element of the list - tail', () => {
        const list = new LinkedList();
        assert.isNull(list.removeTail());
        list.addToTail(15);
        list.addToTail(14512);
        list.addToTail(23);
        assert.equal(list.length, 3);
        assert.equal(list.tail.value, 23);
        list.removeTail();
        assert.equal(list.length, 2);
        assert.equal(list.tail.value, 14512);
    });
    it('should remove the first element of the list - head', () => {
        const list = new LinkedList();
        list.addToTail(231);
        list.addToTail(1);
        list.addToTail(2421);
        assert.equal(list.head.value, 231);
        assert.equal(list.length, 3);
        list.removeHead();
        assert.equal(list.head.value, 1);
    });
    it('should add the first element, create a head', () => {
        const list = new LinkedList();
        assert.isNull(list.removeHead())
        list.addToHead(154);
        assert.equal(list.head.value, 154);
        list.addToHead(92);
        assert.equal(list.head.value, 92);
    });
    it('should get a value of index', () => {
        const list = new LinkedList();
        list.addToHead(4124);
        list.addToTail(412412);
        list.addToTail(241);
        assert.equal(list.get(2).value, 241);
        assert.isNull(list.get(5));
    });
    it('should set new value for item from index', () => {
        const list = new LinkedList();
        assert.isNull(list.set(4, 'this index doesnt exists'));
        list.addToHead(412);
        list.addToTail(41);
        list.set(1, 'new value');
        assert.equal(list.get(1).value, 'new value');
    });
    it('should add new value at index', () => {
        const list = new LinkedList();
        list.addToHead(412);
        list.addToTail(41);
        list.addToTail(12);
        list.addToTail(41241);
        list.insertAt(2, 'new value');
        assert.equal(list.get(2).value, 'new value');
        assert.equal(list.length, 5);
        assert.isNull(list.insertAt(45, 'this index doesnt exists'));
    });
    it('should remove node from index', () => {
        const list = new LinkedList();
        assert.isNull(list.removeAt(-2));
        assert.isNull(list.removeAt(421));
        list.addToHead(412);
        list.addToTail(41);
        list.addToTail(12);
        list.removeAt(1);
        assert.equal(list.get(1).value, 12);
        assert.equal(list.length, 2);
    });
    it('should remove first value', () => {
        const list = new LinkedList();
        list.addToHead(412);
        list.addToTail(41);
        list.addToTail(12);
        assert.equal(list.get(1).value, 41);
        assert.equal(list.length, 3);
        list.remove(41);
        assert.equal(list.get(1).value, 12);
        assert.equal(list.length, 2);
    });
    it('should print list', () => {
        const list = new LinkedList();
        list.addToHead(412);
        list.addToTail(41);
        list.addToTail(12);
        list.printList();
        assert.equal(list.printList(), '412 -> 41 -> 12');
    });
});