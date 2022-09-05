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
