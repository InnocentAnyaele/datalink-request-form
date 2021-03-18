const Deferment = require('../models/deferment');

const addDeferment = (req, res, next) => {
	let deferment = new Deferment({
		name: req.body.name,
		id: req.body.id,
		program: req.body.program,
		programSelect: req.body.programSelect,
		year: req.body.year,
		contact: req.body.contact,
		level: req.body.level,
		from: req.body.from,
		to: req.body.to,
		semester: req.body.semester,
		session: req.body.session,
		campus: req.body.campus,
		reason: req.body.reason,
		approved: false,
		status: 'pending',
	});
	deferment
		.save()
		.then(() => {
			res.status(200).json({ message: 'Request submitted' });
		})
		.catch((err) => {
			res.status(400).send(err);
		});
};

const getDeferment = (req, res, next) => {
	Deferment.find()
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(400).send(err);
		});
};

const deleteDeferment = (req, res, next) => {
	Deferment.findOneAndDelete({ _id: req.params.id }, function (err, results) {
		if (err) {
			res.status(400).send(err);
		}
		if (results) {
			res.status(200).json({ message: 'Request deleted' });
		}
	});
};

const getDefermentFalse = (req, res, next) => {
	Deferment.find({ approved: false })
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const getDefermentTrue = (req, res, next) => {
	Deferment.find({ approved: true })
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const searchDefermentTrue = (req, res, next) => {
	Deferment.find({
		$and: [{ id: { $regex: req.params.id } }, { approved: true }],
	})
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const searchDefermentFalse = (req, res, next) => {
	Deferment.find({
		$and: [{ id: { $regex: req.params.id } }, { approved: false }],
	})
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const confirmDeferment = (req, res, next) => {
	Deferment.findOne({ _id: req.params.id })
		.then((request) => {
			request.approved = true;
			request
				.save()
				.then(() => {
					res.status(200).send('Approved  by Registrar');
				})
				.catch(() => {
					res.status(400).send("Can't approve. Try again later");
				});
		})
		.catch((err) => {
			res.status(500).send("Can't find user");
		});
};

module.exports = {
	addDeferment,
	deleteDeferment,
	getDefermentFalse,
	getDefermentTrue,
	searchDefermentFalse,
	searchDefermentTrue,
	confirmDeferment,
	getDeferment,
};
