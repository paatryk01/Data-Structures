"use strict"
module.exports = class Set{
    constructor(){
        this.data = [];
    }
    has(value){
        return this.data.indexOf(value) > -1 ? true : false;
    }
    getLength(){
        return this.data.length;
    }
    view(){
        return this.data;
    }
    insert(value){
        this.has(value) ? false : this.data.push(value);
    }
    remove(value){
        const index = this.data.indexOf(value);
        if(index > -1){
            return this.data.splice(index, 1);
        } 
    }
    union(otherSet){
        const toReturn = new Set();
        for(let elem of this.data){
            toReturn.insert(elem);
        }
        for(let elem of otherSet.data){
            if(!toReturn.has(elem)){
                toReturn.insert(elem);
            }
        }
        return toReturn.data;
    }
    intersect(otherSet){
        const toReturn = new Set();
        for(let elem of this.data){
            if(otherSet.has(elem)){
                toReturn.insert(elem);
            }
        }
        return toReturn.data;
    }
    differences(otherSet){
        const toReturn = new Set();
        for(let elem of this.data){
            if(!otherSet.has(elem)){
                toReturn.insert(elem);
            }
        }
        return toReturn.data;
    }
}