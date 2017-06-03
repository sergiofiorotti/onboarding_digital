var db_string = 'mongodb://127.0.0.1/onboarding_digital';

var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no banco'))

db.once ('open', function(){
	
	var userSchema = mongoose.Schema({
		
		rg: String,
		shipping_date: Date,
		fullname: String,
		father: String,
		mother: String,
		naturalness: String,
		born_date: Date,
		CPF: String,
		created_at: Date
	});

	exports.User = mongoose.model('User', userSchema);