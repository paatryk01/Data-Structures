'use strict'
class Node(){
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}
class LinkedList{
    constructor(){
        this.length = 0; 
        this.tail = null; // Last node of the linked list.
        this.head = null; // First node of the linked list.
    }
    isEmpty(){
        return this.length === 0;
    }
    printList(){
        const nodes = [];
        let current = this.head;
        while(current){ // If current is exisiting, we are adding this value to array.
            nodes.push(current);
            current = current.next;
        }
        return nodes.join(' -> ') // We are connecting every node using arrows.
    }
    push(value){ // We are adding new value at the end of the list.
        const node = new Node(value);
        if(this.head === null){
            this.head = node;
            this.tail = node;
            this.lenght++;
            return node;
        }
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }
    pop(){ // We are removing last element from the list.
        if(this.isEmpty()){
            return null;
        }
        const nodeToRemove = this.tail; // We want to remove last element - tail.
        if(this.length === 1){ // If list has only 1 element, we are removing the only one element.
            this.head = null;
            this.tail = null;
            this.length--;
            return nodeToRemove;
        }
        let currentNode = this.head; // We are iterating all elements starting from first element - head.
        let secondToLasNode;
        while(currentNode){ // If currentNode exists, we are checking if his next element is the last one.
            if(currentNode.next === this.tail){ // If it's true, we are saving second last node as a current node.
                secondToLastNode = currentNode;
            }
            currentNode = currentNode.next; // If it's false, we are checking next node.
        }
        secondToLastNode.next = null; // We are removing last element.
        this.tail = secondToLastNode; // New last element is the second last element.
        this.length--;
        return nodeToRemove;
    }
    shift(){ // We are removing first element, head.
        if(this.isEmpty()){
            return null;
        }
        let currentHead = this.head; // Current head is the first element.
        this.head = this.head.next; // New first element is the next element, so we are missing old this.head.
        this.length--;
        return currentHead;
    }
    unshift(value){ // We are creating a new head.
        const node = new Node(value);
        if(this.isEmpty()){ // If the list is empty, value is a head.
            this.head = node;
            this.tail = node;
        }
        node.next = this.head; // If list isn't empty, current head is a next element of new node.
        this.head = node; // New head is a new node.
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index > this.length || this.isEmpty()){
            return null;
        }
        if(index === 0){
            return this.head;
        }
        let current = this.head;
        let counter = 0;
        while(counter < index){
            counter++;
            current = current.next; // We are keeping an element to return if we find our index.
        }
        return current;
    }
    set(index, value){ // Updating index with new value.
        let node = this.get(index);
        if(node){
            node.value = value;
            return node;
        }
        return null;
    }
    insertAt(index, value){
        const node = new Node(value);
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;
        
        if(index > length){
            return false;
        }

        if(index === 0){
            node.next = currentNode;
            this.head = node;
        }
        else{
            while(currentIndex < index){
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        length++;
    }
    removeAt(index){
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;
        if(index < 0 || index >= length){
            return null
        }
        if(index === 0){
            this.head = currentNode.next;
        }
        else {
            while(currentIndex < index){
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
        return currentNode.value;
    }
    remove(value){
        let currentNode = this.head;
        let previousNode;
        if(currentNode.value === value){
            this.head = currentNode.next;
        }
        else{
            while (currentNode.value !== value){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this.length--;
    } 
}