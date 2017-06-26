const express = require('express')
const router = express.Router()

const placeConfig = require('../config/place')


router.get('/:name', function (req, res, next) {
    let str = req.params.name;
    // let location = req.params.location;
    var request = require('request');
    var options = { method:'GET',
        url: 'https://maps.googleapis.com/maps/api/place/textsearch/xml?query='+place+'in+'city'&key=YOUR_API_KEY',
        qs: {name: str}
    };

    request(options, function(error, response, body){
        if (error) throw new Error(error);
        jsonBody = JSON.parse(body);
        res.send(jsonBody);
    })
});



module.exports = router
