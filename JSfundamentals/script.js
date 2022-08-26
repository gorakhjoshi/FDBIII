const arr = [10, 20, 30, 40];
console.log(arr);

const foreachOutput = arr.forEach((el, i, array) => {
  // console.log(i);
  console.log(el);
  // console.log(array);
  // return el * 1.5;
});
console.log(foreachOutput);

const mapOutput = arr.map((el, i, array) => {
  // console.log(i);
  // console.log(el);
  // console.log(array);
  return el * 1.5;
});
console.log(mapOutput);

const filterOutput = arr.filter((el, i, array) => {
  // console.log(i);
  // console.log(el);
  // console.log(array);
  return el > 20;
});
console.log(filterOutput);

const reduceOutput = arr.reduce((acc, currentValue) => {
  console.log(acc);
  // console.log(currentValue);

  return acc + currentValue;
}, 10);
console.log(reduceOutput);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

const fruitsNumbers = [14, 5, 6, 3];
fruits.sort();
console.log(fruitsNumbers);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return b - a;
});
console.log(points);

const array1 = [5, 17, 8, 130, 44];
const found = array1.find((element) => element > 10);
console.log(found);
