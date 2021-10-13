const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send("API up and running...")
})

module.exports = router