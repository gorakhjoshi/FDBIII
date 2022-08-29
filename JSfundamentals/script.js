"use strict";

const obj = {
  name: "Alex",
  age: 31,
  calcAge: function () {
    console.log(this);
  },
  favNumbers: {
    firstNumber: 1,
    secondNumber: 2,
  },
};

console.log(obj.favNumbers?.firstNumber);

// ??
// 0, false, null, undefined, NaN, ''

// const totalNumber = false;

// // Short Circuiting Operator
// const totalProduct = totalNumber && 20;

// console.log(totalProduct);

// if (totalProduct) {
//   console.log("You have total products");
// } else {
//   console.log("You don't have total number");
// }

console.log("0" && "false" && "NaN" && "Hello");

obj.totalNumber = 0;

const number = obj.totalNumber ?? 100;

console.log(number);
