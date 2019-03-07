const express = require('express');
const http = require('http')
const port = process.env.PORT || 5000;

const app = require('./app')
const server = http.createServer(app) // express();


// console.log that your server is up and running
// app.listen(port, () => console.log(`Listening on port ${port}`));
server.listen(port, () => console.log(`Listening on port ${port}`));
