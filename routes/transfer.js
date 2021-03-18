const express = require('express');
const router = express.Router();

const TransferController = require('../controllers/TransferController');

router.post('/add', TransferController.addTransfer);
router.delete('/delete/:id', TransferController.deleteTransfer);
router.get('/get', TransferController.getTransfer);
router.get('/getTransferFalse', TransferController.getTransferFalse);
router.get('/getTransferTrue', TransferController.getTransferTrue);
router.get('/searchTransferTrue/:id', TransferController.searchTransferTrue);
router.get('/searchTransferFalse/:id', TransferController.searchTransferFalse);
router.patch('/confirmTransfer/:id', TransferController.confirmTransfer);

module.exports = router;
