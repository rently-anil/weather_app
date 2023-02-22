const axios = require('axios');

let startTime;

const getWeatherByCity = async function (req, res) {

    if (new Date().getTime() < startTime + 5000) return res.status(401).send({ status: false, message: "youcan hit this api after 5 sec" })
    
    let city = req.query.city;
    if (!city) return res.status(400).send({ status: false, message: "please provide city name" });

    let options = {
        method: 'get',
        url: `http://api.openweathermap.org/data/2.5/weather?city=${city}`
    }

    startTime = new Date().getTime();
    try {
        let result = await axios(options);
        return res.status(200).send({ status: true, weather: result });
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
}





const getWeatherByAltitude = async function (req, res) {
    if (new Date().getTime() < startTime + 5000) return res.status(401).send({ status: false, message: "youcan hit this api after 5 sec" });
    
    let latitude = req.query.latitude;
    let longitude = req.query.longitude;

    if (!latitude) return res.status(400).send({ status: false, message: "please provide latitude" });
    if (!longitude) return res.status(400).send({ status: false, message: "please provide longitude" });

    let options = {
        method: 'get',
        url: `http://api.openweathermap.org/data/2.5/weather?longitude=${longitude}&latitude=${latitude}`
    }

    startTime = new Date().getTime();

    try {
        let result = await axios(options);
        return res.status(200).send({ status: true, weather: result });
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
}



module.exports = { getWeatherByCity, getWeatherByAltitude }