"use strict";

const fruits = [
  "apple",
  "mango",
  "melon",
  "lemon"
];
const holas = [
  "Holita",
  function () {
    console.log("Hola");
    return "Si no se hace return devuelve undefined";
  },
];

console.log(holas[1]());

// SET y MAP se usa cuando no se quiere repetir un valor sin tener que hacer nada para comprobar
// set solo admite un valor igual
const numbers = new Set();
numbers.add(5);
numbers.add(10);

console.log(numbers);


// map admite un diccionario con la key y el value.
const students = new Map();
students.set("one", "Marluan");

console.log(students.get("one"));


// Bucles
for(let fruit of fruits){
    console.log(fruit); 
}

const persons = [
    {
        name:"Peter",
        surname:"Griffin"
    },
    {
        name:"Marcp",
        surname:"Antonio"
    }
];

for(let person of persons){
    console.log(person.name); 
}

