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
router.get('/getLibrary', ClearanceController.getClearanceLibrary);
router.get('/searchLibrary/:id', ClearanceController.searchClearanceLibrary);
router.patch('/confirmLibrary/:id', ClearanceController.confirmLibrary);
router.get('/searchClearanceTrue/:id', ClearanceController.searchClearanceTrue);
router.get('/getClearanceTrue', ClearanceController.getClearanceTrue);
router.get('/searchClearance/:id', ClearanceController.searchClearance);

router.patch('/completeClearance/:id', ClearanceController.completeClearance);
router.patch('/pickedClearance/:id', ClearanceController.pickedClearance);
router.get('/getCompleteClearance', ClearanceController.getCompleteClearance);
router.get('/getPickedClearance', ClearanceController.getPickedClearance);
router.get(
	'/searchCompleteClearance/:id',
	ClearanceController.searchCompleteClearance,
);
router.get(
	'/searchPickedClearance/:id',
	ClearanceController.searchPickedClearance,
);
router.get('/getClearancePending', ClearanceController.getClearancePending);
router.get(
	'/searchClearancePending/:id',
	ClearanceController.searchClearancePending,
);

module.exports = router;
