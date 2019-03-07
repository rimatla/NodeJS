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

  if (id === 'special') {
    res.status(200).json({
      message: "You've discovered a special id",
      id
    })
  } else {
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

module.exports = router
