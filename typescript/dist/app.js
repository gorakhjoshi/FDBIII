"use strict";
// 1. Primitive Types
const isAvailable = true;
// let isAvailableLet = 20;
let age = 30;
let hello = "world";
let notDefined = undefined;
let notPresent = null;
notPresent = 30;
// notPresent = '30';
// notPresent = ['30'];
console.log(Symbol("unique") === Symbol("unique"));
// let bigNUmber = BigInt("23123123131312312312312331312");
// console.log(bigNUmber)
let bigNUmber = 20n;
let set = new Set(["hello"]);
console.log(set);
// let arr = [1, 2, 3, 4];
// let arr = new Array<number>(1, 2, 3, 4);
let arr = new Array(1, 2, 3, 4);
let regexp = new RegExp("hello");
const passCheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const myPassword = "Kathmandu1@";
if (myPassword.match(passCheck)) {
    console.log("Strong Password!");
}
else {
    console.log("Weak password");
}
const map = new Map();
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
firstObj.push("30");
console.log(firstObj);
const obj = {
    firstName: "Alex",
    age: 30,
};
// obj.lastName = "Mohr";
console.log(obj);
const hisObject = {
    firstName: "Laxman",
    age: 25,
};
const myAge = 30;
