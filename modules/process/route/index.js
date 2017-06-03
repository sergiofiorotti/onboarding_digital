var express = require('express');
var router = express.Router();

router.get('/process', function(req, res) {
    res.send('Hello World Process!')
})

module.exports = {
    router,
}