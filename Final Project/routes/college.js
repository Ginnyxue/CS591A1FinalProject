const express = require('express')
const router = express.Router()

// const collegeConfig = require('../config/college')


router.get('/:name', function (req, res, next) {
    let str = req.params.name;
    // let location = req.params.location;
    var request = require('request');
    var options = { method:'GET',
        url: 'http://universities.hipolabs.com/search?country=United%20States&name=' + str,
        qs: {name: str}
    };

    request(options, function(error, response, body){
        if (error) throw new Error(error);
        jsonBody = JSON.parse(body);
        res.send(jsonBody);
    })
});



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