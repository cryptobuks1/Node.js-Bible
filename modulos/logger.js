"use strict";
let number = 0;
number++;
console.log("Logger " + number);

function greet(name) {
  console.log("hola " + name);
}

module.exports = {
  greet,
  number: 10,
};
