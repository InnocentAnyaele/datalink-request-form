const express = require('express');
const router = express.Router();

const DefermentController = require('../controllers/DefermentController');

router.post('/add', DefermentController.addDeferment);
router.delete('/delete/:id', DefermentController.deleteDeferment);
router.get('/get', DefermentController.getDeferment);
router.get('/getDefermentFalse', DefermentController.getDefermentFalse);
router.get('/getDefermentTrue', DefermentController.getDefermentTrue);
router.get('/searchDefermentTrue/:id', DefermentController.searchDefermentTrue);
router.get(
	'/searchDefermentFalse/:id',
	DefermentController.searchDefermentFalse,
);
router.patch('/confirmDeferment/:id', DefermentController.confirmDeferment);
router.patch('/completeDeferment/:id', DefermentController.completeDeferment);
router.patch('/pickedDeferment/:id', DefermentController.pickedDeferment);
router.get('/getCompleteDeferment', DefermentController.getCompleteDeferment);
router.get('/getPickedDeferment', DefermentController.getPickedDeferment);
router.get(
	'/searchCompleteDeferment/:id',
	DefermentController.searchCompleteDeferment,
);
router.get(
	'/searchPickedDeferment/:id',
	DefermentController.searchPickedDeferment,
);

module.exports = router;
