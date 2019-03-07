// Module Wrapper Function running under the hood
// (function(exports, require, module, __filename, __dirname){}) 

// console.log(__dirname, __filename);


const person = require('./Person') // CommonJS
console.log(person.name);

const People = require('./People')
// instantiate class
const person1 = new People('Jonas', 34 )
person1.greeting()
const person2 = new People('Jonah', 33 )
person2.greeting()
