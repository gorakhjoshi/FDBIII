// let movieTitle = "Name";
// Type inference

let movieTitle: string = "Name";
// Type annotation
movieTitle = "3 Idiots";

//Any
let anything: any = 9;
anything = "Nepal";
anything = true;

let ages: (number | string)[][];
ages = [[1, 2], ["hello"]];

const myNumbers = [1, 2, 3, 4];
// myNumbers.push(5);
// myNumbers = [1, 2, 3, 4];
// console.log([1, 2] === [1, 2]);

function display(a: number, b: number) {
  console.log(a);
  console.log(b);
}

// display(2, 'hello');
display(2, 10);

function add(a: string, b: string): string {
  return a + b;
}

const result = add("10", "20");
console.log(result);

function print(value: number): void {
  console.log(value);
}

print(10);

// let error = new Error("hello");

// console.log(error);

// let arr;

// console.log(arr)