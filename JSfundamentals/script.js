let language = "Java";
let oldlanguage = language;
language = "JavaScript";

console.log(language);
console.log(oldlanguage);

const development = {
  frontend: "JavaScript",
  backend: "Java",
};

const newDevelopment = development;
console.log(newDevelopment);

newDevelopment.backend = "Node.js";

console.log(newDevelopment);

console.log(development);

// document.querySelector(".root").textContent = "New Hello";
const heading = document.querySelector("h1");

// console.dir(heading);
heading.style.color = "red";
