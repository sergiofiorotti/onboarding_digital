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


var router = require('../../../server.js');

var index = require('../controller/index.js');

var validator = require('validator');

router.get('/clients', function(req, res){
	
	index.list(function(resp){
		
		res.json(resp);
	});
});

router.get('/clients/:id', function(req, res){
	
	var id = req.param('id');

	index.client(id, function(resp){
		
		res.json(resp);
	});
});

router.post('/clients', function(req, res){

	var rg = req.param('rg');
	var shipping_date = req.param('shipping_date');
	var fullname = req.param('fullname');
	var father = req.param('father');
	var mother = req.param('mother');
	var naturalness = req.param('naturalness');
	var born_date = req.param('born_date');
	var CPF = req.param('CPF');
	
	index.save(rg, shipping_date, fullname, 
						father, mother, naturalness, born_date, CPF, function(resp){
		
		res.json(resp);
	});
});

router.put('/clients', function(req, res){

	var id = req.param('id');
	var rg = req.param('rg');
	var shipping_date = req.param('shipping_date');
	var fullname = req.param('fullname');
	var father = req.param('father');
	var mother = req.param('mother');
	var naturalness = req.param('naturalness');
	var born_date = req.param('born_date');
	var CPF = req.param('CPF');

	index.update(id, rg, shipping_date, fullname, 
						father, mother, naturalness, born_date, CPF, function(resp){
		
		res.json(resp);
	});
});

router.delete('/clients/:id', function(req, res){
	
	var id = req.param('id');

	index.delete(id, function(resp){
		
		res.json(resp);
	});
});