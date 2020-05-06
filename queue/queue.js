"use strict"
class Queue{
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
    }
    printQueue(){
        if(!this.isEmpty()){
            return 'Queue is empty';
        }
        return this.items;
    }
    clear(){
        this.items = [];
    }
}