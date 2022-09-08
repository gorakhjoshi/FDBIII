"use strict";
// // Creating sourceElement(div) element
// const sourceElement = document.createElement("div");
// sourceElement.id = "root";

// // Targeting destination
// const destination = document.body;

// // Sending sourceElement(div) to destination
// destination.append(sourceElement);

// // Creating another div
// const divElement = document.createElement("div");
// divElement.textContent = "Hello World";
// divElement.className = "container";

// // Sending divElement to sourceElement
// sourceElement.append(divElement);

// console.log(React);

const rootElement = document.getElementById("root");
const element = React.createElement("div", {
  className: "container",
  children: [
    React.createElement("span", null, "Hello"),
    React.createElement("span", null, "Hello"),
  ],
});

ReactDOM.render(element, rootElement);
