const interestRate = "16%";
console.log(interestRate);

// number
// String

// Array
// Object
// Function

const myCountry = "Nepal";
console.log(myCountry);

const age = 45;

console.log(typeof age);

// const evenNumbers = [2, 4, 6, 8, ];
const evenNumbers = new Array(2, 4, 6, 8, "Hello", [1, 2]);
console.log(evenNumbers[3]);

const bootcamp = {
  duration: "3 months",
  course: "React",
};
console.log(bootcamp.duration);

const arrayBootcamp = ["3 months", "React"];
console.log(arrayBootcamp[1]);

function addTwoNumber(first, second) {
  return first + second;
}

const result = addTwoNumber(10, 20);
console.log(result);

const secondResult = addTwoNumber(13240, 23240);
console.log(secondResult);

let number = 10;
console.log(number);

number = 50;
console.log(number);

// const number = 10;
// console.log(number);
// number = 50;
// console.log(number);

if (number === 50) {
  console.log("Value if Fifty");
} else {
  console.log("Value is not Fifty");
}

// if() {

// }else {

// }

// Ternary Opertor
const isValueFifty = number === 50 ? true : false;

// const ouput = condition ? '' : '';

console.log(isValueFifty);
