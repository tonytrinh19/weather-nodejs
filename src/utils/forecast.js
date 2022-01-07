const request = require('request')

const forecast = (lon, lat, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.FORECAST_API_KEY}&query=` + encodeURIComponent(lat) + ',' + encodeURIComponent(lon)
    request({
        url,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Cannot find the location. Search again!', undefined)
        } else {
            const data = `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} out
            Current humidity level is ${body.current.humidity}% and visibility is at ${body.current.visibility}`
            callback(undefined, data)
        }
    })
}

module.exports = forecast