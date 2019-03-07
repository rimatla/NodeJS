const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Orders were fetched'
  })
})

router.post('/', (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity
  }
  res.status(201).json({
    message: 'Orders were created',
    order
  })
})


router.put('/:orderId', (req, res, next) => {
  const id = req.params.orderId

  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity
  }
  
  if (id === 'replace') {
    res.send(order).status(201)
    res.json({
      message: 'Orders were updated',
      order
    })
  } else {
    res.status(404).json({
      message: 'Order Not found'
    })
  }
})

// GET individual single order
router.get('/:orderId', (req, res, next) => {
  const id = req.params.orderId
  res.status(200).json({
    message: 'Order Details',
    id
  })
})

// DELETE order
router.delete('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted Order'
  })
})

module.exports = router
