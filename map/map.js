"use strict"
class Map{
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
        for(let value in this.data){
            values.push(value);
        }
        return values;
    }
    viewAll(){
        for(let key in this.data){
            console.log(`${key} -> ${this.data}`)
        }
    }
}

//-------------------

const dict = new Map;
const test = new Map;
dict.add('test', 89582);
dict.add('test213', 'nowytest');
dict.add('lorem', 'ipsum');
test.add('l18', 2134);
test.add('nice', 1111);
dict.viewAll();
test.viewAll();
dict.values();
test.values();
dict.keys();
test.keys();
dict.has('test');
dict.has('nothing');
test.has('nice');
test.has('bad');
dict.get('test');
dict.get('notest');
test.get('l18');
test.get(2134);
test.get('idk');
dict.remove('lorem');
dict.remove('pppp');
test.remove('pop');
test.remove('l18');
dict.size();
test.size();
dict.clear();
test.clear();