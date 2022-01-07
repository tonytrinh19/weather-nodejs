const path = require('path')

const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const hbs = require('hbs')
const express = require('express')
const app = express()
const port = process.env.PORT

//Define paths for Express config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectory))

const name = 'Toni Trinh'

app.get('/', (req, res) => {
    let title = 'Weather'
    res.render('index', {
        title,
        name
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'The Help Page',
        date: 'May 6th, 2021',
        name
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }

    geocode(req.query.address, (error, {longitude, latitude, location} = {}) => {
        if (error) {
            return res.send({
                error
            })
        }
        forecast(longitude, latitude, (error, forecastData) => {
            if (error) {
                return res.send({
                    error
                })
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

// any routes with /help/something
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        error: 'Help article not found',
        name
    })
})

// * is the rest routes -> returns 404 page
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        error: 'Page not found',
        name
    })
})

app.listen(port, () => {
    console.log('Server running on port ' + port)
})