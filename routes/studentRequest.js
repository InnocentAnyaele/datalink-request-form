const express = require('express');
const router = express.Router();

const StudentRequestController = require('../controllers/StudentRequestController');

router.post('/add', StudentRequestController.addStudentRequest);
router.delete('/delete/:id', StudentRequestController.deleteStudentRequest);
router.get('/get', StudentRequestController.getStudentRequest);
router.get(
	'/searchPaidFalse/:id',
	StudentRequestController.searchStudentRequestPaidFalse,
);
router.get(
	'/searchPaidTrue/:id',
	StudentRequestController.searchStudentRequestPaidTrue,
);
router.get('/getPaidTrue', StudentRequestController.getStudentRequestPaidTrue);
router.get(
	'/getPaidFalse',
	StudentRequestController.getStudentRequestPaidFalse,
);
router.patch('/confirmPayment/:id', StudentRequestController.confirmPayment);
router.patch('/completeRequest/:id', StudentRequestController.CompleteRequest);
router.patch('/pickedRequest/:id', StudentRequestController.PickedRequest);
router.get(
	'/searchCompleteRequest/:id',
	StudentRequestController.searchCompleteRequest,
);
router.get(
	'/searchPickedRequest/:id',
	StudentRequestController.searchPickedRequest,
);
router.get('/getCompleteRequest', StudentRequestController.getCompleteRequest);
router.get('/getPickedRequest', StudentRequestController.getPickedRequest);

module.exports = router;
