"use strict";
// Creating sourceElement(div) element
const sourceElement = document.createElement("div");
sourceElement.id = "root";

// Targeting destination
const destination = document.body;

// Sending sourceElement(div) to destination
destination.append(sourceElement);

// Creating another div
const divElement = document.createElement("div");
divElement.textContent = "Hello World";
divElement.className = "container";

// Sending divElement to sourceElement
sourceElement.append(divElement);
