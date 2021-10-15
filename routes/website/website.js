const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Website goes here")
})

module.exports = router