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
