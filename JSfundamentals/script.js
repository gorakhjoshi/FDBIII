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
