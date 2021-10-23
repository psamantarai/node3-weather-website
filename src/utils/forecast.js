const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url =  'http://api.weatherstack.com/current?access_key=5f62b7ca590336cbed0fa33ebf604a2e&query='+latitude+','+longitude

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + ', It is currently ' + body.current.temperature + ' degress out. But feels like ' + body.current.feelslike)
        }
    })
}

module.exports = forecast