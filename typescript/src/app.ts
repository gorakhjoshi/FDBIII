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

const map = new Map<string, number>()