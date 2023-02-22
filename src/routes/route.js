const express = require("exprss");
const { getWeatherByCity, getWeatherByAltitude } = require("../controllers/weatherController");
const router = express.Router();

router.get('/getWeatherByCity', getWeatherByCity);
router.get('/getWeatherByAltitude', getWeatherByAltitude);

module.exports = router;