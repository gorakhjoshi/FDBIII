// Global Scope
// Function Scope
// Block Scope

// ES6
// const
// let

// ES5
// var

// Hoisting

const firstName = "Alex";

function calcAge(birthYear) {
  console.log(firstName);
  // const age = 40;
  // if (birthYear > 1980) {
  //   const add = function (a, b) {
  //     console.log(a + b);
  //   };

  //   // function add(a, b) {
  //   //   console.log(a + b);
  //   // }
  //   add(10, 20);
  // }
  const firstName = "David";
}

calcAge(1990);
console.log(firstName);
