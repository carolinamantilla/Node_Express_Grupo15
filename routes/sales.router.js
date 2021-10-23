const {Router} = require('express');
const router = Router();
const {salesController} = require('../controllers');
const { body } = require('express-validator');
const verifyProducts = require('../mdl/VerifyProducts');
const verifyToken = require('../mdl/verifyToken');

router.get('/:id', salesController.getSale);

router.get('/', salesController.getSales);

router.post('/', 
    body('fecha', 'La fecha de la venta es requerida').exists().isDate(),
    body('documentoCliente', 'El documentos del cliente es requerido y debe ser numerico').exists().isNumeric(),
    body('nombreCliente', 'El nombre del cliente es requerido').exists(),
    body('documentoVendedor', 'El documento del vendedor es requerido y debe ser numerico').exists().isNumeric(),
    body('estado', 'El estado de la venta es requerido(En proceso/Cancelada/Entregada)').exists(),
    body('valorTotal', 'El valor total de la venta es requerido y debe ser numerico').exists().isNumeric(),
    body('productos', 'Los productos son requeridos').exists(),
    salesController.createSale);

router.put('/:id',
    body('fecha', 'La fecha de la venta es requerida').exists().isDate(),
    body('documentoCliente', 'El documentos del cliente es requerido y debe ser numerico').exists().isNumeric(),
    body('nombreCliente', 'El nombre del cliente es requerido').exists(),
    body('documentoVendedor', 'El documento del vendedor es requerido y debe ser numerico').exists().isNumeric(),
    body('estado', 'El estado de la venta es requerido(En proceso/Cancelada/Entregada)').exists(),
    body('valorTotal', 'El valor total de la venta es requerido y debe ser numerico').exists().isNumeric(),
    body('productos', 'Los productos son requeridos').exists(),
    salesController.updateSale);
    
router.delete('/:id', salesController.deleteSale);

module.exports = router;