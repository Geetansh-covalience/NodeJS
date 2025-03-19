const { person, printName, printAge} = require("./commonjs_export.js");

console.log("Before Change");

printName();
printAge();

console.log();

console.log("After Change");

person.name = "Geetansh Jain";
person.age = "22 years and 3 months";


printName