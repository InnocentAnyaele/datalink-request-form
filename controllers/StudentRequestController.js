const StudentRequest = require('../models/studentRequest');

const addStudentRequest = (req, res, next) => {
	let studentRequest = new StudentRequest({
		surname: req.body.surname,
		othernames: req.body.otherNames,
		id: req.body.id,
		level: req.body.level,
		session: req.body.session,
		program: req.body.program,
		option: req.body.option,
		contact: req.body.contact,
		address: req.body.address,
		attestation: req.body.attestation,
		additional: req.body.additional,
		transcript: req.body.transcript,
		internship: req.body.internship,
		authentication: req.body.authentication,
		visa: req.body.visa,
		express: req.body.express,
		general: req.body.general,
		resident: req.body.resident,
		renewal: req.body.renewal,
		bank: req.body.bank,
		project: req.body.project,
		specifyproject: req.body.specifyProject,
		results: req.body.results,
		schoolcheck: req.body.schoolCheck,
		schoolprogram: req.body.schoolProgram,
		employmentcheck: req.body.employmentCheck,
		scholarshipcheck: req.body.scholarshipCheck,
		other: req.body.otherText,
		othercopies: req.body.other,
		price: req.body.payable,
		reference: req.body.payment,
		status: 'pending',
		paid: false,
	});
	studentRequest
		.save()
		.then(() => {
			res.status(200).json({ message: 'Request submitted!' });
		})
		.catch((err) => {
			res.status(400).send(err);
		});
};

const deleteStudentRequest = (req, res, next) => {
	StudentRequest.findOneAndDelete(
		{ _id: req.params.id },
		function (err, result) {
			if (err) {
				res.status(400).send(err);
			}
			if (result) {
				res.status(200).json({ message: 'Request deleted!' });
			}
		},
	);
};

const getStudentRequest = (req, res, next) => {
	StudentRequest.find()
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const getStudentRequestPaidTrue = (req, res, next) => {
	StudentRequest.find({ $and: [{ paid: true }, { status: 'pending' }] })
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const getStudentRequestPaidFalse = (req, res, next) => {
	StudentRequest.find({ paid: false })
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const searchStudentRequestPaidFalse = (req, res, next) => {
	StudentRequest.find({
		$and: [{ id: { $regex: req.params.id } }, { paid: false }],
	})
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const searchStudentRequestPaidTrue = (req, res, next) => {
	StudentRequest.find({
		$and: [
			{ id: { $regex: req.params.id } },
			{ paid: true },
			{ status: 'pending' },
		],
	})
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const confirmPayment = (req, res, next) => {
	StudentRequest.findOne({ _id: req.params.id })
		.then((request) => {
			request.paid = true;
			request
				.save()
				.then(() => {
					res.status(200).send('Payment confirmed');
				})
				.catch(() => {
					res.status(500).send("Can't change value");
				});
		})
		.catch((err) => {
			res.status(500).send("Can't find user");
		});
};

const CompleteRequest = (req, res, next) => {
	StudentRequest.findOne({ _id: req.params.id })
		.then((request) => {
			request.status = 'completed';
			request
				.save()
				.then(() => {
					res.status(200).send('Status Changed');
				})
				.catch(() => {
					res.status(500).send('Somthing went wrong');
				});
		})
		.catch((err) => {
			res.status(500).send("Can't find user");
		});
};

const searchCompleteRequest = (req, res, next) => {
	StudentRequest.find({
		$and: [{ id: { $regex: req.params.id } }, { status: 'completed' }],
	})
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const getCompleteRequest = (req, res, next) => {
	StudentRequest.find({
		status: 'completed',
	})
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const PickedRequest = (req, res, next) => {
	StudentRequest.findOne({ _id: req.params.id })
		.then((request) => {
			request.status = 'picked';
			request
				.save()
				.then(() => {
					res.status(200).send('Status Changed');
				})
				.catch(() => {
					res.status(500).send('Somthing went wrong');
				});
		})
		.catch((err) => {
			res.status(500).send("Can't find user");
		});
};

const searchPickedRequest = (req, res, next) => {
	StudentRequest.find({
		$and: [{ id: { $regex: req.params.id } }, { status: 'picked' }],
	})
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const getPickedRequest = (req, res, next) => {
	StudentRequest.find({
		status: 'picked',
	})
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

module.exports = {
	addStudentRequest,
	deleteStudentRequest,
	getStudentRequest,
	getStudentRequestPaidFalse,
	getStudentRequestPaidTrue,
	searchStudentRequestPaidFalse,
	searchStudentRequestPaidTrue,
	confirmPayment,
	CompleteRequest,
	PickedRequest,
	searchCompleteRequest,
	searchPickedRequest,
	getCompleteRequest,
	getPickedRequest,
};
