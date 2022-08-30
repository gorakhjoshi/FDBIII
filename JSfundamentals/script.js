"use strict";

const restaurant = new Map();

restaurant.set("open", 10).set("close", 22);
console.log(restaurant);

console.log(restaurant.get("close"));

console.log(restaurant.has("open"));

console.log(...restaurant);
