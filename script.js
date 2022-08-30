"use strict";

const url = "https://api.github.com/users/gorakhjoshi";

// const response = fetch(url);

// response.then(function () {
//   console.log("Your promise is fulfilled");
// });

// response.catch(function () {
//   console.log("Error");
// });

console.log("Start");
const response = fetch(url)
  .then((res) => {
    console.log("First Then");
    return res.json();
  })
  .then((data) => {
    console.log("Second Then");
    console.log(data);
  })
  .catch((e) => console.log(e));

console.log(response);

console.log("End");

// for (let i = 0; i < 100000; i++) {
//   console.log("Running");
// }
