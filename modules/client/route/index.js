var express = require('express');
var router = express.Router();
var controller = require('../controller');

router.get('/client', function(req, res) {
    controller.create();
    res.send('Hello World Client!')
})

module.exports = {
    router,
}