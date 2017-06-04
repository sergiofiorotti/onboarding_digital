//Module dependencies
const mongoose = require('./base/mongoose');
const Schema = mongoose.Schema;

//User Schema
const ClientSchema = new Schema({
    rg: String,
    cpf: String,
    fullname: String,
    father: String,
    mother: String,
    naturalness: String,
    born_date: Date,
    shipping_date: Date,
    created_at: Date
});

// Exports Module
module.exports.Client = mongoose.model('Client', ClientSchema).Client;