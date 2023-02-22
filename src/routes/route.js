const express = require("express");
const { getWeatherByCity, getWeatherByAltitude } = require("../controllers/weatherController");
const router = express.Router();

router.get('/getWeatherByCity', getWeatherByCity);
router.get('/getWeatherByAltitude', getWeatherByAltitude);

router.all('/**', function(_, res){
    return res.status(400).send({status: false, message: "invalid url"})
});

module.exports = router;