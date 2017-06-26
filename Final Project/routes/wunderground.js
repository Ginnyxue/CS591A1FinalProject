
const express = require('express')
const router = express.Router()

const weatherConfig = require('../config/weather')


router.get('/:name', function (req, res, next) {
    let str = req.params.name;
    var temp = new Array();
    var temp = str.split(',')
    var Wunderground = require('wunderground-api');
    var client = new Wunderground(weatherConfig.api_key);
    var opts = {
    	city: temp[0],
    	state: temp[1]
    }
    client.conditions(opts, function(err, data){
    	if(err) throw err;
    	else{
    		console.log(data.weather);
    		res.send(data.weather)
    	}
    })
})





// router.get('/', function(req, res, next){


// 	var Wunderground = require('wunderground-api');
// 	var client = new Wunderground();
// 	var opts = {
// 	  key:'f5463b093e192e58', 
// 	  city:'Washington', 
// 	  state: 'DC'
// 	}
	 
// 	client.conditions(opts, function(err, data) {
// 	  if (err) throw err;
// 	  else {
// 	  	console.log(data.weather);
// 	  	res.send(data.weather);
// 	  }
// 	});

// });

module.exports = router

