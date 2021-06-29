var router = require('express').Router();
var barcodeController = require('../Controller/barcodeController');

router.get('/fetchAllProducts',barcodeController.fetchAllProducts);
router.post('/insertproducts',barcodeController.insertProducts);
// router.get('/search/:value',barcodeController.searchStudent);

module.exports = router;