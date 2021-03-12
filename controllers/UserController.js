const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');

const add = (req, res, next) => {
	username = req.body.username;
	password = req.body.password;
	// console.log(username);
	// console.log(password);
	bcrypt.hash(password, 10, function (err, hashedPass) {
		if (err) {
			return res.send('Failed to hash password');
		}

		let user = new User({
			username: username,
			password: hashedPass,
		});

		user
			.save()
			.then((user) => {
				res.status(200).send('user has been added');
			})
			.catch((err) => {
				res.status(400).send(error);
			});
	});
};

const login = (req, res, next) => {
	var username = req.body.username;
	var password = req.body.password;

	console.log(username);
	console.log(password);

	User.findOne({ $or: [{ username: username }] }).then((user) => {
		if (user) {
			bcrypt.compare(password, user.password, function (err, result) {
				if (err) {
					res.status(500).send('User does not exist');
				}
				if (result) {
					let token = jwt.sign({ username: user.username }, 'verySecretValue', {
						expiresIn: '1h',
					});
					res.status(200).json({
						message: 'user logged in successfully',
						token: token,
						auth: true,
					});
				} else {
					res.status(400).json({ message: 'Wrong password' });
				}
			});
		} else {
			res.status(404).json({ message: 'User does not exist' });
		}
	});
};

const get = (req, res, next) => {
	User.find()
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const changePassword = (req, res, next) => {
	const bcrypt = require('bcrypt');

	const password = req.body.password;
	const username = 'financialdepartment';
	const newpassword = req.body.newpassword;

	bycrypt.hash(newpassword, 10, function (err, hashedPass) {
		if (err) {
			res.status(500).send(err);
		}

		if (hashedPass) {
			const hashedPassword = hashedPass;

			User.findOne({ $or: [{ username: username }] })
				.then((user) => {
					if (user) {
						bycrypt.compare(password, user.password, function (err, result) {
							if (err) {
								res.status(400).send('cannot find a password match');
							}
							if (result) {
								user.password = hashedPassword;
								user
									.save()
									.then((result) => {
										res.status(200).send('Password changed successfully');
									})
									.catch((err) => {
										res.status(500).send('cannot change password');
									});
							} else {
								res.status(500).send('wrong password');
							}
						});
					} else {
						res.status(400).send('cannot find this user');
					}
				})
				.catch((err) => {
					res.status(500).send('server error');
				});
		}
	});
};

module.exports = {
	add,
	login,
	get,
	changePassword,
};
