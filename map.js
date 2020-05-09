"use strict"
module.exports = class Map{
    constructor(){
        this.data = {};
        this.mapSize = 0;
    }
    clear(){
        this.data = {};
        this.mapSize = 0;
    }
    has(key){
        return key in this.data;
    }
    add(key, value){
        this.data[key] = value;
        this.mapSize++;
    }
    remove(key){
        delete this.data[key];
        this.mapSize--;
    }
    get(key){
        return this.has(key) ? this.data[key] : undefined;
    }
    size(){
        return this.mapSize;
    }
    keys(){
        const keys = [];
        for(let key in this.data){
            keys.push(key);
        }
        return keys;
    }
    values(){
        const values = [];
        for(let key in this.data){
            if(this.has(key)){
                values.push(this.data[key]);
            }
        }
        return values;
    }
    viewAll(){
        for(let key in this.data){
            return `${key} -> ${this.data[key]}`;
        }
    }
}