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
  name: "Gorakh",
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
};

const hourOne = obj.freeHours.hourOne;
console.log(hourOne);

const availableHour = obj.freeHours.allHours[0];
console.log(availableHour);

const arr = [1, 2, 3];
// const thirdElement = arr[2];
// console.log(thirdElement);

// const fourthElement = arr[3];
// console.log(fourthElement);

const [, , thirdElement = 0] = arr;
console.log(thirdElement);
