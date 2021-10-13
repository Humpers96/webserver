// Express setup
const express = require('express')
const app = express()

// Routes setup
const api_routes = require('./routes/api/api')
const website_routes = require('./routes/website/website')

// PORT
const port = process.env.PORT || 4237

// Landing page server status response
app.get('/', (req, res) => {
    res.send('Server online.')
})

// Exposing my API
app.use('/api', api_routes)

// Run server
app.listen(port, () => {
    console.log('Listening on port: ' + port)
})