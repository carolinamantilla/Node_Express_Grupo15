const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');
const { salesController } = require('../controllers');
//const verifyToken = require('../middlewares/verifyToken');

router.get('/:id', salesController.getSale);

router.get('/', salesController.getSales);

router.post('/',
    body('valor', 'El valor es requerido y debe ser numerico').exists(),
    body('nombreCliente', 'nombreCliente es requerido').exists(),
    body('idCliente', 'idCliente es requerido').exists(),
    body('idVendedor', 'idVendedor es requerido').exists(),
    body('productos', 'productos son requeridos').exists().notEmpty()
    , salesController.createSale);

router.put('/:id',
    body('valor', 'El valor es requerido y debe ser numerico').exists(),
    body('nombreCliente', 'nombreCliente es requerido').exists(),
    body('idCliente', 'idCliente es requerido').exists(),
    body('idVendedor', 'idVendedor es requerido').exists(),
    body('productos', 'productos son requeridos').exists().notEmpty()
    ,salesController.updateSale);

router.delete('/:id', salesController.deleteSale);

module.exports = router;