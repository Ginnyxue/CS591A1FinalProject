const express = require('express')
const router = express.Router()

// const collegeConfig = require('../config/college')


router.get('/:name', function (req, res, next) {
    let str = req.params.name;
    // let location = req.params.location;
    var request = require('request');
    var options = { method:'GET',
        url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + str,
        // url: 'https://wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search=',
        // url: 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&rvsection=0&titles=',
        qs: {name: str}
    };

    request(options, function(error, response, body){
        if (error) throw new Error(error);
        jsonBody = JSON.parse(body);
        res.send(jsonBody);
    })
});



module.exports = router