 "use strict"
class List{
    constructor(){
        this.listElements = [];
        this.listSize = 0;
        this.pos = 0;
    };
    append(value){
        this.listElements[this.listSize++] = value;
    };
    find(value){
        for(let i = 0; i < this.listElements.length; i++){
            if(this.listElements[i] == value){
                return i;
            }
        }
        return -1;
    };
    remove(value){
        const valuePos = this.find(value);
        if(valuePos > -1){
            this.listElements.splice(valuePos, 1);
            this.listSize--;
        }
    };
    insert(value, after){
        const afterPos = this.find(after);
        if(afterPos > -1){
            this.listElements.splice(afterPos + 1, 0, value);
            this.listSize++;
        }
    };
    contains(value){
        const valuePos = this.find(value);
        if(valuePos > -1){
            return true;
        } 
        return false;
    };
    moveTo(position){
        if(position <= this.listSize){
             this.pos = position;
        }
    };
    getValue(){
        return this.listElements[this.pos];
    };
    previous(){
        return this.listElements[--this.pos];
    };
    next(){
        return this.listElements[this.pos++];
    };
    front(){
        this.pos = 0;
    };
    end(){
        this.pos = this.listSize - 1;
    };
    length(){
        return this.listSize;
    };
    view(){
        return this.listElements;
    };
}