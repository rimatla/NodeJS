const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

/****** fix and prevent CORS errors  *******/
app.use((req, res, next) => {
  //adjust the response
  res.header('Access-Control-Allow-Origin', '*') // access to any client
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  ) // which headers may be send along with the request
  if (req.method === 'OPTIONS') {
    // browser will always send a options request first before you send a post or get request
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({})
  }
  next() // enable other routes to take over
})

// Custom Routes
const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')
const weatherRoutes = require('./api/routes/weather')

// logger data middleware
app.use(morgan('dev'))
// support simple urlencoded data i.e false
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// use anything contained on productRoutes
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)
app.use('/weather', weatherRoutes)

// handle errors
app.use((req, res, next) => {
  const error = new Error('Bummer Not Found')
  error.status = 404
  // forward the error request
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message
    }
  })
})

module.exports = app
