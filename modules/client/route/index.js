const express = require('express');
const validator = require('validator');

const router = express.Router();
// const controller = require('../controller');

const mongoose = require('mongoose');
const Client = require('../../../models/client').Client;

router.get('/clients', function(req, res) {
    Client.find().exec(function(err, clients) {
        if (err) return console.log(err);
        res.json(clients);
    });
});

// router.get('/clients/:id', function(req, res) {
// 	var id = req.param('id');

// 	controller.client(id, function(resp) {
// 		res.json(resp);
// 	});
// });

// router.post('/clients', function(req, res) {
// 	var rg = req.param('rg');
// 	var shipping_date = req.param('shipping_date');
// 	var fullname = req.param('fullname');
// 	var father = req.param('father');
// 	var mother = req.param('mother');
// 	var naturalness = req.param('naturalness');
// 	var born_date = req.param('born_date');
// 	var CPF = req.param('CPF');

// 	controller.save(rg, shipping_date, fullname, 
//                     father, mother, naturalness, born_date, CPF, function(resp) {
// 		res.json(resp);
// 	});
// });

// router.put('/clients', function(req, res){
// 	var id = req.param('id');
// 	var rg = req.param('rg');
// 	var shipping_date = req.param('shipping_date');
// 	var fullname = req.param('fullname');
// 	var father = req.param('father');
// 	var mother = req.param('mother');
// 	var naturalness = req.param('naturalness');
// 	var born_date = req.param('born_date');
// 	var CPF = req.param('CPF');

// 	controller.update(id, rg, shipping_date, fullname, 
// 						father, mother, naturalness, born_date, CPF, function(resp) {
// 		res.json(resp);
// 	});
// });

// router.delete('/clients/:id', function(req, res) {
// 	var id = req.param('id');

// 	controller.delete(id, function(resp) {
// 		res.json(resp);
// 	});
// });

module.exports = {
    router
}







