const SaleSchema = require('../models/sale')
const { validationResult } = require('express-validator');

const getSale = async(req,res)=>{
    if(typeof req.params.id != 'undefined'){
        try{
            let sale = await SaleSchema.findById(req.params.id);
            res.status(200).json({data: sale}); 
        }
        catch(err){
            res.status(404).json({
                error: {
                    code: 404,
                    message: "Venta no encontrada"
                }
            })
        }
    }else{
        res.status(404).json({
            error: {
                code: 404,
                message: "ID not found"
            }
        })
    }       
}

const getSales = async (req,res)=>{
    try{
        let sales = await SaleSchema.find();
        res.status(200).json({ data: sales }); 
    }
    catch(err){
        res.status(404).json({
            error: {
                code: 404,
                message: "Problemas con la base de datos" + err.message
            }
        })
    }
}

const createSale = async (req,res)=>{

	const errors = validationResult(req);
	if (!errors.isEmpty()) {
        
        return res.status(400).json({
            error: {
                code: 404,
                errors: errors.array()
            }
        });
    }

    req.body.productos.forEach(async(element) => {
        if(mongoose.Types.ObjectId.isValid(element._id)){
            let product = await ProductSchema.findById(element._id);
            if(!product) {
                return res.status(400).json({
                    error: {
                        code: 404,
                        message: `Producto con id:${element._id} no existe`
                    }
                })
            }
        }else{
            return res.status(400).json({
                error: {
                    code: 404,
                    message: `Producto con id:${element._id} no existe`
                }
            })
        }
    }); 
    
    let sale = new SaleSchema(req.body);
    try{
        await sale.save();
        res.status(201).json({ data: sale }); 
    }
    catch (err) {
        res.status(404).json({
            error: {
                code: 404,
                message: "Problemas con la base de datos" + err.message
            }
        })
    }     
}

const updateSale =  async (req,res)=>{
	const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: {
                code: 404,
                errors: errors.array()
            }
        });
    }
    try{
        let newSale = {
			id: req.params.id,
            fecha: req.body.fecha,
            documentoCliente: req.body.documentoCliente,
            nombreCliente: req.body.nombreCliente,
            documentoVendedor: req.body.documentoVendedor,
            estado: req.body.estado,
            valorTotal: req.body.valorTotal,
            productos: req.body.productos
        }
        await SaleSchema.findByIdAndUpdate(req.params.id, newSale);
        res.status(201).json({ data: newSale })
    }
    catch (err) {
        res.status(404).json({
            error: {
                code: 404,
                message: "ID not found"
            }
        })
    }
}             

const deleteSale = async (req, res) => {
    if (req.params.id != 'undefined') {
        try {
            let result = await SaleSchema.findByIdAndRemove(req.params.id);
            res.status(200).json({ data: result });
        }
        catch (err) {
            res.status(404).json({
                error: {
                    code: 404,
                    message: "Venta no encontrada"
                }
            })
        }
    } else {
        res.status(404).json({
            error: {
                code: 404,
                message: "ID not found"
            }
        })
    }
}

module.exports.getSale = getSale;
module.exports.getSales = getSales;
module.exports.createSale = createSale;
module.exports.updateSale = updateSale;
module.exports.deleteSale = deleteSale;