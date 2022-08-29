"use strict";

// Synchronous
// Asynchronous
console.log("Running Before Function");

async function add() {
  await fetch("http://localhost:5500");
  console.log("Running Inside Function First");
  console.log("Running Inside Function Second");
}

console.log("Running After Function");

add();

console.log("Running After Function Call");

for (let i = 0; i < 100000; i++) {
  console.log("Running");
}
