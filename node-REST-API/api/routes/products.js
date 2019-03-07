const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request to /products'
  })
})

router.post('/', (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price
  }
  res.status(201).json({
    message: 'Handling POST request to /products',
    createdProduct: product
  })
})

// GET individual single product
router.get('/:productId', (req, res, next) => {
  const id = req.params.productId
  const result = {"id": 1,"name":"Matt","band":"BB Brawlers"}

  if (id === 'special') {
    res.status(200).json({
      message: "You've discovered a special id",
      id
    })
  } else {
    res.send(result)
    res.status(200).json({
      message: 'You passed an ID'
    })
  }
})

// PATCH products
router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Updated Product'
  })
})

// DELETE products
router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted Product'
  })
})

// SEND response 
router.get('/:productId', (req, res, next) => {
  const id = req.params.productId
  const request = [
    {
    "timestamp":"2015-09-01T16:00:00.000Z",
    "temperature": 27.1,
    "dewPoint": 16.7,
    "precipitation": 0
  }
  ]
  if (id === 'special') {
    res.send(request)
  } else {
    res.status(404).json({
      message: 'Not found'
    })
  }
})

module.exports = router
