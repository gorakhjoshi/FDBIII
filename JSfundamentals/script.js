// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (number of arr) {
//   console.log(number);
// }

// for (i in arr) {
//   console.log(i);
// }

// let index = 0;

// while (index < 8) {
//   console.log("Running!");
//   index++;
// }

// forEach, map, filter, reduce

// function display(print) {
//   // console.log(a);
//   print(10);
// }

// function displayNumber(number) {
//   console.log(number);
// }

// display(displayNumber);

// function displayNumber(number) {
//   console.log(number);
// }

// displayNumber(10);
// const arr = [11, 12, 13, 14, 15, 16, 17, 18, 20];

// console.log(arr);

// arr.forEach((item, index, array) => console.log(item));

// function add(a, b) {
//   console.log("Running");
//   return "hello";
// }

// const result = add(10, 20);

// console.log(result);

const obj = {
  age: 30,
  favNumber: [1, 2, 3, 4],
  calcAge: function () {
    console.log("Running calcAge function!");
    return "Your age";
  },
  freeHours: {
    hourOne: "six-seven",
    hourTwo: 2100,
    allHours: [1800, 1900, 2100],
  },
  name: "Gorakh",
};

// const hourOne = obj.freeHours.hourOne;
// console.log(hourOne);

const availableHour = obj.freeHours.allHours[0];
console.log(availableHour);

const {
  age: myAge,
  favNumber,
  freeHours: {
    hourOne,
    allHours: [, firstNumber],
  },
} = obj;
console.log(myAge);
console.log(favNumber);
console.log(firstNumber);

const arr = [1, 2, 3, 40, [1, 2]];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const d = arr[3];
// const e = arr[4];

// const [a, b, c, d, e] = arr;

// console.log(a, b, c, d, e);

const allElement = [...arr];
// const numbers = 1,2,3,4

const arrOne = [1, 2, 3, 4];
const arrTwo = [5, 6, 7, 8];

// const arrThree = [1, 2, 3, 4, 5, 6, 7, 8];

const arrThree = arrOne.concat(arrTwo);
console.log(arrThree);
console.log([...arrOne, ...arrTwo]);

const [...two] = arrOne;
console.log(...two);

function displayArray(...a) {
  console.log(...a);
}

displayArray(1, 2, 3, [1, 2], "hello");
