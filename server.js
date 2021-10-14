// Express setup
const express = require('express')
const app = express()

// Path setup
const path = require('path')

// Routes setup
const api_routes = require('./routes/api/api')
const website_routes = require('./routes/website/website')

// Static folder setup
app.use(express.static(path.join(__dirname,'public')))

// Handlbars setup
const hbs = require('express-handlebars')
app.set('view engine', 'handlebars')
app.engine('handlebars', hbs(
    {
        defaultLayout: "index"
    }
))

// Landing page server status response
app.get('/', (req, res) => {
    res.render('nothing_here')
})

// Exposing my API
app.use('/api', api_routes)

// PORT
const port = process.env.PORT || 4237

// Run server
app.listen(port, () => {
    console.log('Listening on port: ' + port)
})