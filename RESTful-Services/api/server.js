const express = require('express')
const app = express()
// joi returns a class
const Joi = require('joi')

// validate inputs with joy

// middleware
app.use(express.json())

// Object saved in memory
const courses = [
  { id: 1, name: 'course-1' },
  { id: 2, name: 'course-2' },
  { id: 3, name: 'course-3' }
]

/**************** GET **********************/
app.get('/', (req, res) => {
  res.send('Hello API World')
})

// get a list of all courses
app.get('/api/courses', (req, res) => {
  res.send(courses)
})

// get a single course by id
// http://localhost:5000/api/courses/1
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id)) // parse string
  if (!course)
    res.status(404).send('The course with the given ID was not found')
  res.send(course)
})

// multiple params
// http://localhost:5000/api/courses/2019/3
app.get('/api/courses/:year/:month', (req, res) => {
  res.send(req.params)
})

// query string param i.e sort by name (additional data or optional)
// http://localhost:5000/api/courses/2019/3?sortBy=name
app.get('/api/courses/:year/:month', (req, res) => {
  res.send(req.query)
})

/**************** POST **********************/
//create a new course
app.post('/api/courses', (req, res) => {
  /*
  // MANUAL input validation , always validate the input
  if (!req.body.name || req.body.name.length < 3) {
    res.status(400).send('Name is required and should at leas 3 chars long')
    return // stop execution
  }
  */

  // JOI input validation | define an schema for joi
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  }

  const result = Joi.validate(req.body, schema)
  // console.log(result);

  if (result.error) {
    res.status(400).send(result.error.details[0].message)
    return // stop execution
  }

  // save in memory
  const course = {
    // manually assign id
    id: courses.length + 1,
    name: req.body.name
  }
  courses.push(course)
  // return object in the body of response
  res.send(course)
})

/**************** PUT **********************/
app.put('/api/courses/:id', (req, res) => {
  // look up the course
  const course = courses.find(c => c.id === parseInt(req.params.id)) // parse string
  if (!course)
    res.status(404).send('The course with the given ID was not found')

  // validate
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  }
  const result = Joi.validate(req.body, schema)
  if (result.error) {
    res.status(400).send(result.error.details[0].message)
    return
  }

  // update it and return it
  course.name = req.body.name
  // if you have more properties set them here as well
  res.send(course)
})

// Abstract JOI validation for reusability

/**************** PORT **********************/
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}`))
