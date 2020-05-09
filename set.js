"use strict"
module.exports = class Set{
    constructor(){
        this.data = [];
    }
    has(value){
        if(this.data.indexOf(value) > -1) {
            return true;
        } 
        else{
            return false;
        }
    }
    getLength(){
        return this.data.length;
    }
    view(){
        return this.data;
    }
    insert(value){
        if(this.has(value)){
            return false;
        }
        else{
            this.data.push(value);
        }
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
        return toReturn;
    }
    differences(otherSet){
        const toReturn = new Set();
        for(let elem of this.data){
            if(!otherSet.has(elem)){
                toReturn.insert(elem);
            }
        }
        return toReturn;
    }
}