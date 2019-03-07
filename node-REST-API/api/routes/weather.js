const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Weather fetched'
    })
})

// SEND response 
router.get('/:weatherId', (req, res, next) => {
    const id = req.params.weatherId

    let request = [
        {
            "timestamp": "2015-09-01T16:00:00.000Z",
            "temperature": 27.1,
            "dewPoint": 16.7,
            "precipitation": 0
        },
        {
            "timestamp": "2016-09-01T16:00:00.000Z",
            "temperature": 27.1,
            "dewPoint": 16.7,
            "precipitation": 0
        },
        {
            "timestamp": "2015-09-01T16:00:00.000Z",
            "temperature": 27.1,
            "dewPoint": 16.7,
            "precipitation": 0
        },
        {
            "timestamp": "2014-09-01T16:00:00.000Z",
            "temperature": 27.1,
            "dewPoint": 16.7,
            "precipitation": 0
        },

    ]

    for (let key in request) {
        if (!request.hasOwnProperty(key)) {
            continue;
        }
        // skip this property
        if (key == "timestamp") {
            // do something...
            request = key
        }
    }

    console.log(request)



    if (id === '2015-09-01T16:00:00.000Z') {
        res.send(request)
    } else {
        res.status(404).json({
            message: 'Ouch Weather Not found'
        })
    }
})

module.exports = router