"use strict";

// this keyword
console.log(this);

const obj = {
  name: "Alex",
  age: 31,
  calcAge: function () {
    console.log(this);
  },
};

obj.calcAge();

function add() {
  console.log(this);
  if (true) {
    console.log(this);
  }
}

add();

if (true) {
  console.log(this);
}

const Private = "Hospital One";
console.log(Private);

const country = "Nepal";

const Country = "India";

let lockdownSituations = false;
const canDrive = true;

if (canDrive) {
  // lockdownSituation = true;
  lockdownSituations = true;
}

if (lockdownSituations) {
  console.log("Hey! You can not drive furing lockdown.");
}

const arr = [1, 2, 3, 4];
for (const num of arr) {
  console.log(num);
}

// const myName = "Gorakh";

(function () {
  console.log("Hello");
})();
// IIFE
