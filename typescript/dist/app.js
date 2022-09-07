"use strict";
// // typescript generic
// class Queue<T> {
//   data: Array<T> = [];
//   push(item: T) {
//     this.data.push(item);
//   }
//   pop(): T | undefined {
//     return this.data.shift();
//   }
// }
// const firstObj = new Queue<number>();
// firstObj.push(30);
// // firstObj.push('40');
// console.log(firstObj);
// const secondObj: Queue<string> = new Queue();
// secondObj.push("30");
// secondObj.push("hello");
// console.log(secondObj);
// const arr = new Array<number>(1, 2, 3, 4);
function outputArray(valueOne, valueTwo) {
    return [valueOne, valueTwo];
}
// function outputArray(valueOne, valueTwo) {
//   return [valueOne, valueTwo];
// }
console.log(outputArray(1, "hello"));
// outputArray.pop();
// function getArray(items) {
//   return new Array().concat(items);
// }
// const outputNumber = getArray([1, 2, 3, 4]);
// console.log(outputNumber);
// const outputString = getArray(["hello", "World"]);
// console.log(outputString);
// outputNumber.push("Nepal");
// console.log(outputNumber);
function getArray(items) {
    return new Array().concat(items);
}
const outputNumber = getArray([1, 2, 3, 4]);
console.log(outputNumber);
const outputString = getArray(["hello", "World"]);
console.log(outputString);
// outputNumber.push(10);
// console.log(outputNumber);
let value;
// value = Number('10.67');
value = +"10.67";
console.log(value.toFixed(1));
// console.log((<number>value).toFixed(1)); do not use
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
async function print() {
    await delay(1000);
    console.log("1s");
    await delay(1000);
    console.log("2s");
}
print();
