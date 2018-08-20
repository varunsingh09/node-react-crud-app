const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    name: String,
    company: String,
    email: String,
    phone: String,
    address:String,
	age: { type: Number, min: 18, max: 65, required: true }
});

module.exports = mongoose.model('Customer', CustomerSchema);