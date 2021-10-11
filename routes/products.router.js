const {Router} = require('express');
const router = Router();
const {productsController} = require('../controllers'); 

router.get('/uno', productsController.getProduct);

router.get('/', productsController.getProducts);

router.post('/', productsController.createProduct);

router.put('/', productsController.updateProduct);

router.delete('/', productsController.deleteProduct);

module.exports = router;