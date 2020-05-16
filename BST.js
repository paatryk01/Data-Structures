'use strict'
const Node = require('./nodeBST');
module.exports = class BST{
   constructor(){
       this.root = null;
    };
    insert(data){
        const newNode = new Node(data);
        if(!this.root){
            this.root = newNode;
        }
        else{
            this.insertHelper(this.root, newNode);
        }
    };
    insertHelper(node, newNode){
        if(newNode.data < node.data){
            if(!node.left){
                node.left = newNode;
            }
            else {
                this.insertHelper(node.left, newNode);
            }
        }
        else {
            if(!node.right){
                node.right = newNode;
            }
            else {
                this.insertHelper(node.right, newNode);
            }
        }
    };
    remove(data){
        if(!this.root){
            return 'tree is empty';
        }
        this.removeHelper(this.root, data);
    };
    removeHelper(node, rmNode){
        if(rmNode < node.data){
            node.left = this.removeHelper(node.left, rmNode);
            return node;
        }
        else if(rmNode > node.data){
            node.right = this.removeHelper(node.right, rmNode);
            return node;
        }
        else{
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
            let aux = this.findMinFrom(node.right)
            node.data = aux.data;
            return node;
        }
    };
    findMinFrom(node){
        if(node.left === null){
            return node;
        }
        return this.findMinFrom(node.left);
    };
    search(searchedNode){
        if(!this.root){
            return 'tree is empty';
        }
        return this.searchHelper(this.root, searchedNode);
    };
    searchHelper(node, searchedNode){
        if(node === null){
            return false;
        }
        else if(node.data < searchedNode){
            return this.searchHelper(node.right, searchedNode);
        }
        else if(node.data > searchedNode){
            return this.searchHelper(node.left, searchedNode);
        }
        else{
            return true;
        }
    };
    findMin(){
        if(this.root){
            let node = this.root;
            while(node && node.left !== null){
                node = node.left;
            }
            return node.data;
        }
    };
    findMax(){
        if(this.root){
            let node = this.root;
            while(node && node.right !== null){
                node = node.right;
            }
            return node.data;
        }
    };
    inOrder(){
        if(this.root === null) return null;
        const result = [];
        const inOrderHelper = (node) => {
            if (node.left) inOrderHelper(node.left);
            result.push(node.data);
            if (node.right) inOrderHelper(node.right);
        }
        inOrderHelper(this.root);
        return result.toString();
    };
    preOrder(){
        if(this.root === null) return null;
        const result = [];
        const preOrderHelper = (node) => {
            result.push(node.data);
            if(node.left) preOrderHelper(node.left);
            if(node.right) preOrderHelper(node.right);
        }
        preOrderHelper(this.root);
        return result.toString();
    };
    postOrder(){
        if(this.root === null) return null;
        const result = [];
        const postOrderHelper = (node) => {
            if(node.left) postOrderHelper(node.left);
            if(node.right) postOrderHelper(node.right);
            result.push(node.data);
        }
        postOrderHelper(this.root);
        return result.toString();
    }
}
