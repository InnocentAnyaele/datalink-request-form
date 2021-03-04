const express = require('express');
const router = express.Router();

const AdminController = require('../controllers/AdminController');

router.post('/add', AdminController.add);
router.post('/login', AdminController.login);
// router.patch('/changePassword', AdminController.changePassword);

module.exports = router;
