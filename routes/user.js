const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

router.post('/add', UserController.add);
router.post('/login', UserController.login);
// router.patch('/changePassword', UserController.changePassword);

module.exports = router;
