"use strict";
// ES6 Classes

class Person {
  constructor(firstName, birthYear) {
    this.first = firstName;
    this.birthDate = birthYear;
  }
  calcAge() {
    return 2022 - this.birthDate;
  }

  add(a, b) {
    return a + b;
  }
}

const objAlex = new Person("Alex", 1990);

console.log(objAlex.calcAge());

const myCountry = "Nepal";
console.log(myCountry.toUpperCase());

class Animal {
  constructor(legs, wings) {
    this.legs = legs;
    this.wings = wings;
  }
  walk() {
    console.log("walking on " + this.legs + " legs");
  }
}

class Bird extends Animal {
  constructor(legs) {
    super(legs);
  }
  fly() {
    console.log("flying");
  }
}

let bird = new Bird(2);
console.log(bird);

bird.walk();
bird.fly();
