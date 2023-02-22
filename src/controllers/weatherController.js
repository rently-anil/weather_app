let axios = require('axios');


const getWeatherByCity = async function(req, res){
    try{
        let city = req.query.city;
        
        if(!city) return res.status(400).send({status:false, message: "please provide city name"});
        
        let options = {
            method : 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?city=${city}`
        }

        let result = await axios(options);
        return res.status(200).send({status: true, weather: result});
    }
    catch(err){
        return res.status(500).send({status: false, message: err.message});
    }
}



const getWeatherByAltitude = async function(req, res){
    try{
        let latitude = req.query.latitude;
        let longitude = req.query.longitude;
        
        if(!latitude) return res.status(400).send({status:false, message: "please provide latitude"});
        if(!longitude) return res.status(400).send({status:false, message: "please provide longitude"});
        
        let options = {
            method : 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?longitude=${longitude}&latitude=${latitude}`
        }

        let result = await axios(options);
        return res.status(200).send({status: true, weather: result});
    }
    catch(err){
        return res.status(500).send({status: false, message: err.message});
    }
}



module.exports = {getWeatherByCity, getWeatherByAltitude}