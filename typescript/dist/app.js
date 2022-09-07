"use strict";
let exampleAny;
exampleAny = 30;
console.log(typeof exampleAny);
exampleAny = "hello";
exampleAny = [1, 2, 3];
console.log(exampleAny);
let exampleUnknown;
exampleUnknown = 30;
console.log(typeof exampleUnknown);
exampleUnknown = "30";
console.log(typeof exampleUnknown);
exampleUnknown = ["30"];
console.log(typeof exampleUnknown);
let numbers;
numbers = 40;
numbers = 50.1678;
// numbers = "15.879";
// console.log(numbers.toFixed(1));
// numbers.i.wish.to.us.this();
// any -> unknown
// if (typeof numbers === "number") {
//   console.log("I am a number");
//   console.log(numbers.toFixed(1));
// }
// if (typeof numbers === "string") {
//   console.log("I am a string");
// }
typeof numbers === "number" && console.log(numbers.toFixed(1));
console.log(typeof numbers === "number");
