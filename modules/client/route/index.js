var express = require('express');
var router = express.Router();

router.get('/client', function(req, res) {
    res.send('Hello World Client!')
})

module.exports = {
    router,
}