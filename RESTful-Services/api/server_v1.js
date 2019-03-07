const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello API World')
})

// get a list of courses
app.get('/api/courses', (req, res) => {
  // return an array
  res.send([1, 2, 3])
})

// get a single course
// http://localhost:5000/api/courses/1
app.get('/api/courses/:id', (req, res) => {
  res.send(req.params.id)
})

// multiple params
// http://localhost:5000/api/courses/2019/3
app.get('/api/courses/:year/:month', (req, res) => {
  res.send(req.params) // essential/required values
  // res.send(req.params.year)
  // res.send(req.params.month)
})

// query string param i.e sort by name (additional data or optional)
// http://localhost:5000/api/courses/2019/3?sortBy=name
app.get('/api/courses/:year/:month', (req, res) => {
  res.send(req.query)
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}`))

// set environment variable
// $ export PORT=5000
