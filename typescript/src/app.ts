// 1. Primitive Types
const isAvailable: boolean = true;
// let isAvailableLet = 20;
let age = 30;
let hello = "world";

let notDefined = undefined;
let notPresent: number | null = null;
notPresent = 30;
// notPresent = '30';
// notPresent = ['30'];

console.log(Symbol("unique") === Symbol("unique"));

// let bigNUmber = BigInt("23123123131312312312312331312");
// console.log(bigNUmber)

let bigNUmber = 20n;

let set = new Set<string>(["hello"]);
console.log(set);

// let arr = [1, 2, 3, 4];
// let arr = new Array<number>(1, 2, 3, 4);
let arr: number[] = new Array(1, 2, 3, 4);

let regexp = new RegExp("hello");

const passCheck =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const myPassword = "Kathmandu1@";

if (myPassword.match(passCheck)) {
  console.log("Strong Password!");
} else {
  console.log("Weak password");
}

const map = new Map<string, number>();

class Queue<T> {
  data: Array<T> = [];

  push(item: T) {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.shift();
  }
}

const firstObj = new Queue();

firstObj.push(30);
firstObj.push("30");

console.log(firstObj);

// type Person = { firstName: string; age: number; lastName?: string };
interface Person {
  firstName: string;
  age: number;
  lastName?: string;
}

const obj: Person = {
  firstName: "Alex",
  age: 30,
};

// obj.lastName = "Mohr";
console.log(obj);

const hisObject: { firstName: string; age: number; lastName?: string } = {
  firstName: "Laxman",
  age: 25,
};

type Age = number;
const myAge: Age = 30;

// const numbers = [1, 2];
// numbers.push(3);

// console.log(numbers)

// Tuple
let numbers: readonly[number, number] = [1, 2];

numbers = [10, 40];

// numbers.push(30);

console.log(numbers);
