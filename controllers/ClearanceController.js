const Clearance = require('../models/clearance');

const addClearance = (req, res, next) => {
	let clearance = new Clearance({
		name: req.body.name,
		id: req.body.id,
		program: req.body.program,
		option: req.body.option,
		campus: req.body.campus,
		session: req.body.session,
		year: req.body.year,
		level: req.body.level,
		semester: req.body.semester,
		headofdepartment: false,
		financialdepartment: false,
		library: false,
		status: 'pending',
	});
	clearance
		.save()
		.then(() => {
			res.status(200).json({ message: 'Request submitted!' });
		})
		.catch((err) => {
			res.status(400).send(err);
		});
};

const deleteClearance = (req, res, next) => {
	Clearance.findOneAndDelete({ _id: req.params.id }, function (err, results) {
		if (err) {
			res.status(400).send(err);
		}
		if (results) {
			res.status(200).json({ message: 'Request deleted' });
		}
	});
};

const getClearance = (req, res, next) => {
	Clearance.find()
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(400).send(err);
		});
};

const getClearanceFinancialDepartment = (req, res, next) => {
	Clearance.find({ financialdepartment: false })
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const searchClearanceFinancialDepartment = (req, res, next) => {
	Clearance.find({
		$and: [{ id: { $regex: req.params.id } }, { financialdepartment: false }],
	})
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const confirmFinancialDepartment = (req, res, next) => {
	Clearance.findOne({ _id: req.params.id })
		.then((request) => {
			request.financialdepartment = true;
			request.financialdepartmentofficer = req.body.officer;
			request
				.save()
				.then(() => {
					res.status(200).send('Finanicial department Cleared');
				})
				.catch(() => {
					res.status(200).send("Can't clear financial department");
				});
		})
		.catch((err) => {
			res.status(500).send("Can't find user");
		});
};

module.exports = {
	addClearance,
	getClearance,
	getClearanceFinancialDepartment,
	searchClearanceFinancialDepartment,
	confirmFinancialDepartment,
	deleteClearance,
};
