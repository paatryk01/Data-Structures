"use strict"
class Stack{
    constructor(){
        this.storage = [];
        this.length = 0;
    }
    isEmpty(){
        return this.length === 0;
    }
    add(value){
        return this.storage.push(value);
        this.length++;
    }
    remove(){
        return this.storage.pop();
        --this.length;
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