"use strict"
module.exports = class Queue{
    constructor(){
        this.items = [];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    enqueue(value){
        return this.items.push(value);
    }
    dequeue(){
        if(!this.isEmpty()){
            return this.items.shift();
        }
    }
    front(){
        if(!this.isEmpty()){
            return this.items[0];
        }
        return 'Queue is empty';
    }
    printQueue(){
        if(!this.isEmpty()){
            return this.items;
        }
        return 'Queue is empty';
    }
    clear(){
        this.items = [];
    }
}