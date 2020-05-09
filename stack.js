"use strict"
module.exports = class Stack{
    constructor(){
        this.storage = [];
        this.length = 0;
    }
    isEmpty(){
        return this.length === 0;
    }
    add(value){
        this.length++;
        return this.storage.push(value);
    }
    remove(){
        --this.length;
        return this.storage.pop();
    }
    clear(){
        this.storage = [];
        this.length = 0;
    }
    getLength(){
        return this.length;
    }
    view(){
        return this.storage;
    }
}