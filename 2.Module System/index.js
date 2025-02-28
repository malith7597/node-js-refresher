// module.exports is used to return a module as an object
// require is used to import a module as an object

const firstModule = require("./operations.js");
console.log(firstModule.add(1, 2)); // ReferenceError: add is not defined
// The add function is not defined in the current file, so it throws an error.
console.log(firstModule.sub(1, 2)); // ReferenceError: sub is not defined
// The sub function is not defined in the current file, so it throws an error.
console.log(firstModule.divide(1, 2)); // ReferenceError: divide is not defined
