const path = require('path') // already included w/ node no need to install

// Base file name
console.log(path.basename(__filename))

// Directory Name
console.log(path.dirname(__filename))

// File extension
console.log(path.extname(__filename))

// Create path object
console.log(path.parse(__filename))

// concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))
 