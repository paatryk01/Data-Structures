const assert = require('chai').assert;
const BST = require('../BST');
const Node = require('../nodeBST');

describe('BST', () => {
    it('should create first node in tree and right - left', () => {
        const tree = new BST();
        assert.isNull(tree.root);
        tree.insert(12);
        assert.equal(tree.root.data, 12);
        tree.insert(15);
        tree.insert(2);
        assert.equal(tree.root.left.data, 2);
        assert.equal(tree.root.right.data, 15);
    });
    it('should remove node', () => {
        const tree = new BST();
        assert.equal(tree.remove(16), 'tree is empty');
        tree.insert(11);
        tree.insert(4);
        tree.insert(7);
        tree.insert(19);
        tree.insert(13);
        tree.insert(24);
        tree.insert(17);
        tree.insert(29);
        tree.insert(20);
        tree.insert(50);
        tree.remove(4); // remove with one children
        assert.equal(tree.root.left.data, 7);
        tree.remove(11); // remove with two children
        assert.equal(tree.root.data, 13);
        tree.remove(7); // remove without children
        assert.equal(tree.root.left, null);
        assert.equal(tree.search(50), true);
        assert.equal(tree.search(81), false);
    });
    it('should return minimum value', () => {
        const tree = new BST();
        tree.insert(11);
        tree.insert(4);
        tree.insert(7);
        tree.insert(19);
        tree.insert(13);
        tree.insert(24);
        tree.insert(17);
        tree.insert(29);
        tree.insert(20);
        tree.insert(50);
        assert.equal(tree.findMin(), 4);
        tree.remove(4);
        assert.equal(tree.findMin(), 7);
    });
    it('should return maximum value', () => {
        const tree = new BST();
        tree.insert(11);
        tree.insert(4);
        tree.insert(7);
        tree.insert(19);
        tree.insert(13);
        tree.insert(24);
        tree.insert(17);
        tree.insert(29);
        tree.insert(20);
        tree.insert(50);
        assert.equal(tree.findMax(), 50);
        tree.remove(50);
        assert.equal(tree.findMax(), 29);
    });
    // it('should print a value of node', () => {
    //     const tree = new BST();
    //     tree.insert(11);
    //     tree.insert(4);
    //     assert.equal(tree.printNode(4), '4');
    //     assert.equal(tree.printNode(11), '11');
    // });
    it('should return nodes in order', () => {
        const tree = new BST();
        assert.isNull(tree.inOrder());
        tree.insert(11);
        tree.insert(4);
        tree.insert(7);
        tree.insert(19);
        tree.insert(13);
        tree.insert(24);
        tree.insert(17);
        tree.insert(29);
        tree.insert(20);
        tree.insert(50);
        assert.equal(tree.inOrder(), '4,7,11,13,17,19,20,24,29,50');
    });
    it('should return nodes pre order', () => {
        const tree = new BST();
        assert.isNull(tree.preOrder());
        tree.insert(11);
        tree.insert(4);
        tree.insert(7);
        tree.insert(19);
        tree.insert(13);
        tree.insert(24);
        tree.insert(17);
        tree.insert(29);
        tree.insert(20);
        tree.insert(50);
        assert.equal(tree.preOrder(), '11,4,7,19,13,17,24,20,29,50');
    });
        it('should return nodes pre order', () => {
        const tree = new BST();
        assert.isNull(tree.preOrder());
        tree.insert(11);
        tree.insert(4);
        tree.insert(7);
        tree.insert(19);
        tree.insert(13);
        tree.insert(24);
        tree.insert(17);
        tree.insert(29);
        tree.insert(20);
        tree.insert(50);
        assert.equal(tree.preOrder(), '11,4,7,19,13,17,24,20,29,50');
    });
    it('should return nodes post order', () => {
        const tree = new BST();
        assert.isNull(tree.postOrder());
        tree.insert(11);
        tree.insert(4);
        tree.insert(7);
        tree.insert(19);
        tree.insert(13);
        tree.insert(24);
        tree.insert(17);
        tree.insert(29);
        tree.insert(20);
        tree.insert(50);
        assert.equal(tree.postOrder(), '7,4,17,13,20,50,29,24,19,11');
    });
}); 