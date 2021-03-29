const mongoose = require('mongoose');
const transferRequest = require('./transfer');
const Schema = mongoose.Schema;

const transferSchema = new Schema(
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

const Transfer = mongoose.model('transfer', transferSchema);
module.exports = Transfer;
