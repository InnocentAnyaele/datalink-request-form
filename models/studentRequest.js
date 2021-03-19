const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentRequestSchema = new Schema(
	{
		surname: {
			type: String,
		},
		othernames: {
			type: String,
		},
		id: {
			type: String,
		},
		level: {
			type: String,
		},
		session: {
			type: String,
		},
		program: {
			type: String,
		},
		option: {
			type: String,
		},
		contact: {
			type: String,
		},
		address: {
			type: String,
		},
		attestation: {
			type: Number,
		},
		transcript: {
			type: Number,
		},
		internship: {
			type: Number,
		},
		authentication: {
			type: Number,
		},
		additional: {
			type: Number,
		},
		visa: {
			type: Number,
		},
		express: {
			type: Number,
		},
		general: {
			type: Number,
		},
		resident: {
			type: Number,
		},
		renewal: {
			type: Number,
		},
		bank: {
			type: Number,
		},
		project: {
			type: Number,
		},
		specifyproject: {
			type: String,
		},
		results: {
			type: Number,
		},
		schoolcheck: {
			type: Boolean,
		},
		schoolprogram: {
			type: String,
		},
		employmentcheck: {
			type: Boolean,
		},
		scholarshipcheck: {
			type: Boolean,
		},
		other: {
			type: String,
		},
		othercopies: {
			type: Number,
		},
		price: {
			type: Number,
		},
		reference: {
			type: String,
		},
		status: {
			type: String,
		},
		paid: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true },
);

const StudentRequest = mongoose.model('studentRequest', studentRequestSchema);
module.exports = StudentRequest;
