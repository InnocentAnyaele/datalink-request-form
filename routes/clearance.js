const express = require('express');
const router = express.Router();

const ClearanceController = require('../controllers/ClearanceController');

router.post('/add', ClearanceController.addClearance);
router.delete('/delete/:id', ClearanceController.deleteClearance);
router.get('/get', ClearanceController.getClearance);
router.get(
	'/getFinancialDepartment',
	ClearanceController.getClearanceFinancialDepartment,
);
router.get(
	'/searchFinancialDepartment/:id',
	ClearanceController.searchClearanceFinancialDepartment,
);
router.patch(
	'/confirmFinancialDepartment/:id',
	ClearanceController.confirmFinancialDepartment,
);
router.patch(
	'/confirmHeadOfDepartment/:id',
	ClearanceController.confirmHeadOfDepartment,
);
router.get(
	'/getHeadOfDepartment',
	ClearanceController.getClearanceHeadOfDepartment,
);
router.get(
	'/searchHeadOfDepartment/:id',
	ClearanceController.searchClearanceHeadOfDepartment,
);

module.exports = router;
