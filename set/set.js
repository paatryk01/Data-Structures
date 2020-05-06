"use strict"
class Set{
    constructor(){
        this.data = [];
    }
    has(value){
        if(this.data.indexOf(value) > -1){
            return true;
        }
        return false;
    }
    getLength(){
        return this.data.length;
    }
    view(){
        return this.data;
    }
    insert(value){
        if(this.data.has(value) = -1){
            return this.data.push(value);
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
}