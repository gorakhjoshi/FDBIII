"use strict";

const numberSet = new Set([1, 2, 3, 1, 2, 3]);

console.log(numberSet);

console.log(numberSet.has(3));

console.log(numberSet.add(4));

console.log(numberSet.delete(2));

console.log(numberSet);

numberSet.clear();

console.log(numberSet);

// numberSet.map

const mainMenu = new Set(["Pizza", "Momo", "Pasta", "Pizza", "Rice"]);

console.log(mainMenu.size);

for (const menuItem of mainMenu) {
  console.log(menuItem);
}

console.log([...mainMenu]);
