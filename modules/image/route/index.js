var express = require('express');
var router = express.Router();

router.get('/image', function(req, res) {
    res.send('Hello World Image!')
})

module.exports = {
    router,
}