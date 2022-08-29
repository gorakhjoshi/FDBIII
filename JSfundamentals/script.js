"use strict";
// Constructor Function
const Person = function (firstName) {
  this.first = firstName;
  this.calcAge = function (birthYear) {
    return 2022 - birthYear;
  };
};

const alexObj = new Person("Alex");
console.log(alexObj);
// Person.prototype.calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };
// console.log(Person.prototype);

console.log(alexObj.calcAge(1990));

const arr = [1, 2, 3];
console.log(arr);

const newObj = new Person("Prashant");
// console.log(newObj);

// console.log(Person);

const newObject = {
  a: 1,
};

console.log(newObject);

console.dir(document);

console.log(new Set());
console.log(new Map());
