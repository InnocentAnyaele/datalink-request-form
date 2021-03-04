const Admin = require('../models/admin');
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

		let admin = new Admin({
			username: username,
			password: hashedPass,
		});

		admin
			.save()
			.then((admin) => {
				res.status(200).send('admin has been added');
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

	Admin.findOne({ $or: [{ username: username }] }).then((admin) => {
		if (admin) {
			bcrypt.compare(password, admin.password, function (err, result) {
				if (err) {
					res.status(500).send('User does not exist');
				}
				if (result) {
					let token = jwt.sign(
						{ username: admin.username },
						'verySecretValue',
						{ expiresIn: '1h' },
					);
					res.status(200).json({
						message: 'user logged in successfully',
						token: token,
						auth: true,
					});
				} else {
					res.status(404).send('Wrong password');
				}
			});
		} else {
			res.status(404).send('User does not exist');
		}
	});
};

// const changePassword = (req, res, next) => {
// 	const password = req.body.password;
// 	const username = req.body.username;
// 	const newpassword = req.body.newpassword;

// 	console.log('username: ' + username);
// 	console.log('password: ' + password);
// 	console.log('newpassword: ' + newpassword);

// 	bycrypt.hash(newpassword, 10, function (err, hashedPass) {
// 		if (err) {
// 			res.status(500).send(err);
// 		}

// 		if (hashedPass) {
// 			const hashedPassword = hashedPass;

// 			Admin.findOne({ $or: [{ username: username }] })
// 				.then((admin) => {
// 					if (admin) {
// 						bycrypt.compare(password, admin.password, function (err, result) {
// 							if (err) {
// 								res.status(400).send('cannot find a password match');
// 							}
// 							if (result) {
// 								admin.password = hashedPassword;
// 								admin
// 									.save()
// 									.then((result) => {
// 										res.status(200).send('Password changed successfully');
// 									})
// 									.catch((err) => {
// 										res.status(500).send('cannot change password');
// 									});
// 							} else {
// 								res.status(500).send('wrong password');
// 							}
// 						});
// 					} else {
// 						res.status(400).send('cannot find this user');
// 					}
// 				})
// 				.catch((err) => {
// 					res.status(500).send('server error');
// 				});
// 		}
// 	});
// };

module.exports = {
	add,
	login,
	// changePassword,
};
