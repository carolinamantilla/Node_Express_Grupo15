const SaleSchema = require('../models/sale')

const getSale = async(req,res)=>{
    if(typeof req.body != 'undefined'){
        try{
            let sale = await SaleSchema.findById(req.body.id);
            res.json({sale}); 
        }
        catch(err){
            console.error(err);
        }
    }else{
        res.json({msg: "No se puede encontrar la venta."})
    }       
}

const getSales = async (req,res)=>{
    try{
        let sales = await SaleSchema.find();
        res.json({sales}); 
    }
    catch(err){
        console.error(err);
    }
    
}

const createSale = async (req,res)=>{
    if(typeof req.body != 'undefined'){
        let venta = new SaleSchema(req.body);
         try{
             await venta.save();
             res.json({msg: 'Se ha creado la venta: ' + venta.id}); 
         }
         catch(err){
             console.error(err);
         }
     }else{
         res.json({msg: "No se puede crear la venta."})
     }       
}

const updateSale =  async (req,res)=>{
    if(typeof req.body != 'undefined'){
        try{
            await SaleSchema.findOneAndUpdate(
                { _id: req.body.id },
                {
                    fecha: req.body.fecha,
                    documentoCliente: req.body.documentoCliente,
                    nombreCliente: req.body.nombreCliente,
                    documentoVendedor: req.body.documentoVendedor,
                    estado: req.body.estado,
                    valorTotal: req.body.valorTotal,
                }
            );
            res.json({msg: "Se ha actualizado la venta: " + req.body.id});
        }
        catch(err){
            console.error(err);
        }
    }else{
        res.json({msg: "No se puede actualizar la venta: " + req.body.id})
    }           
}

const deleteSale = async(req,res)=>{
    if(typeof req.body != 'undefined'){
        try{
            await SaleSchema.findOneAndRemove(req.body.id);
            res.json({msg: 'Se ha eliminado la venta: ' + req.body.id}); 
        }
        catch(err){
            console.error(err);
        }
        }else{
            res.json({msg: "No se puede eliminar la venta."})
        }   
}

module.exports.getSale = getSale;
module.exports.getSales = getSales;
module.exports.createSale = createSale;
module.exports.updateSale = updateSale;
module.exports.deleteSale = deleteSale;