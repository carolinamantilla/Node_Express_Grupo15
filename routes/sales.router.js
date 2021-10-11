const {Router} = require('express');
const router = Router();
const {salesController} = require('../controllers');
const verifyProducts = require('../mdl/VerifyProducts')

router.get('/uno', salesController.getSale);

router.get('/', salesController.getSales);

router.post('/', verifyProducts, salesController.createSale);

router.put('/', salesController.updateSale);

router.delete('/', salesController.deleteSale);

module.exports = router;