'use strict'
const Node = require('./nodeBST');
module.exports = class BST{
   constructor(root){
       this.root = root;
    };
    insert(key){
        const newNode = new Node(key);
        if(this.root === null){
            this.root = newNode;
        }
        else{
            this.insertHelper(this.root, newNode);
        }
    };
    //helper
    insertHelper(node, newNode){
        if(newNode < node){
            if(node.left === null){
                node.left = newNode;
            }
            else {
                insertHelper(node.left, newNode);
            }
        }
        else {
            if(node.right === null){
                node.right = newNode;
            }
            else {
                insertHelper(node.right, newNode);
            }
        }
    };
    remove(key){
        if(!this.root){
            return `nothing to delete, tree is empty`;
        }
        else {
            return removeHelper(this.node, key);
        }
    };
    removeHelper(node, key){
        if(this.root === null){
            return null;
        }
        else if(key < node.key){
            node.left = this.removeHelper(node.left, key);
            return node;
        }
        else if(key > node.key){
            node.right = this.removeHelper(node.right, key);
            return node;
        }
        else {
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }
            else if(node.left === null){
                node = node.right;
                return node;
            }
            else if(node.right === null){
                node = node.left;
                return node;
            }
            let minRight = this.findMinFrom(node.right);
            node.key = minRight.key;
            node.right = this.removeHelper(node.right, minRight.key);
            return node;
        }
    };
    findMinFrom(node){
        if(node.left === null){
            return node;
        }
        else {
            return this.findMinFrom(node.left);
        }
    };
    printNode(node){
        return node.key;
    };
}
