var db = require('../../../db.js');

exports.list = function(callback){
	
	db.Client.find({}, function(error, clients){
		
		if(error){
			
			callback({error:'Não foi possivel retornar os clientes'});
		} else {

			callback(clients);
		}
	});
};


exports.client = function(id, callback){
	
	db.Client.findById(id, function(error, client){
		
		if(error){
			
			callback({error:'Não foi possivel retornar o cliente'});
		} else {

			callback(client);
		}
	});
};


exports.save = function(id, rg, shipping_date, fullname, 
						father, mother, naturalness, born_date, CPF, callback){

		rg: String,
		shipping_date: Date,
		fullname: String,
		father: String,
		mother: String,
		naturalness: String,
		born_date: Date,
		CPF: String,
		created_at: Date
	
	new db.Client({


		'rg': rg,
		'shipping_date': shipping_date,
		'fullname': fullname,
		'father': father,
		'mother': mother,
		'naturalness': naturalness,
		'born_date': born_date,
		'CPF': CPF,
		'created_at': new Date()
	}).save(function(error, client){
		
		if(error){
			
			callback({error:'Não foi possivel salvar o cliente'});
		} else {

			callback(client);
		}
	})
};

exports.update = function(id, rg, shipping_date, fullname, 
						father, mother, naturalness, born_date, CPF, callback){{
	
	db.Client.findById(id, function(error, client) {

		if(rg){
			
			client.rg = rg;
		}

		if(shipping_date){
			
			client.shipping_date = shipping_date;
		}

		if(fullname){
			
			client.fullname = fullname;
		}

		if(father){
			
			client.father = father;
		}

		if(mother){
			
			client.mother = mother;
		}

		if(naturalness){
			
			client.naturalness = naturalness;
		}

		if(born_date){
			
			client.born_date = born_date;
		}

		if(CPF){
			
			client.CPF = CPF;
		}


		client.save(function(error, client){
		
			if(error){
			
				callback({error:'Não foi possivel salvar o cliente'});
			} else {

				callback(client);
			}		
		});
	});
};


exports.delete = function(id, callback){
	
	db.Client.findById(id, function(error, client){
		
		if(error){
			
			callback({error:'Não foi possivel retornar o cliente'});
		} else {

			client.remove(function(error){
				if(!error){
					
					callback({response: 'cliente excluído com sucesso'});
				}
			});
		}
	});	
};
