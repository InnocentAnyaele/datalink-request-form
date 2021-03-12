const mongoose = require('mongoose');
const StudentRequest = require('./studentRequest');
const Schema = mongoose.Schema;

const clearanceSchema = new Schema(
	{
		name: String,
		id: String,
		program: String,
		option: String,
		campus: String,
		contact: String,
		session: String,
		year: String,
		level: String,
		semester: String,
		headofdepartment: Boolean,
		financialdepartment: Boolean,
		library: Boolean,
		status: String,
		financialdepartmentofficer: String,
		headofdepartmentofficer: String,
		libraryofficer: String
	},
	{ timestamps: true },
);

const Clearance = mongoose.model('clearance', clearanceSchema);
module.exports = Clearance;
