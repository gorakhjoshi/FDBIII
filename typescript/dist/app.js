"use strict";
// typescript generic
class Queue {
    data = [];
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
const firstObj = new Queue();
firstObj.push(30);
firstObj.push(40);
console.log(firstObj);
const secondObj = new Queue();
secondObj.push("30");
secondObj.push("hello");
console.log(secondObj);
