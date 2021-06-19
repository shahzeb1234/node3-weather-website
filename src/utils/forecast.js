const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=234b9f9b9baf3dcc001a90edd84a13bd&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('check your network connection', undefined)
        } else if (body.error) {
            console.log(body)
            callback('unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + " it is currently " + body.current.temperature + " degrees out. It feels like" + body.current.feelslike + " degrees out ")
        }
    })
}

module.exports = forecast