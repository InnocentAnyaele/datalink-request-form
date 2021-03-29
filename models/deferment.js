const mongoose = require('mongoose');
const defermentRequest = require('./deferment');
const Schema = mongoose.Schema;

const defermentSchema = new Schema(
	{
		name: String,
		id: String,
		program: String,
		programSelect: String,
		year: String,
		contact: String,
		level: String,
		from: String,
		to: String,
		semester: String,
		session: String,
		campus: String,
		reason: String,
		approved: Boolean,
		status: String,
	},
	{ timestamps: true },
);

const Deferment = mongoose.model('deferment', defermentSchema);
module.exports = Deferment;
