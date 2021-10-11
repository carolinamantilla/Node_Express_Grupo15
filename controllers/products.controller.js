const ProductSchema = require('../models/product')

const getProduct = async (req,res)=>{
    if(typeof req.body != 'undefined'){
        try{
            let product = await ProductSchema.findById(req.body.id);
            res.json({product}); 
        }
        catch(err){
            console.error(err);
        }
    }else{
        res.json({msg: "No se puede encontrar el producto."})
    }       
}

const getProducts = async (req,res)=>{
    try{
        let products = await ProductSchema.find();
        res.json({products}); 
    }
    catch(err){
        console.error(err);
    }
}

const createProduct = async (req,res)=>{
    if(typeof req.body != 'undefined'){
       let product = new ProductSchema(req.body);
        try{
            await product.save();
            res.json({msg: 'Se ha creado el producto: ' + product.id}); 
        }
        catch(err){
            console.error(err);
        }
    }else{
        res.json({msg: "No se puede crear el producto."})
    }       
}

const updateProduct = async (req,res)=>{
    if(typeof req.body != 'undefined'){
        try{
            await ProductSchema.findOneAndUpdate(
                { _id: req.body.id },
                {
                   descripcion: req.body.descripcion,
                   valorUnitario: req.body.valorUnitario,
                   estado: req.body.estado
                }
            );
            res.json({msg: "Se ha actualizado el producto: " + req.body.id});
        }
        catch(err){
            console.error(err);
        }
    }else{
        res.json({msg: "No se puede actualizar el producto: " + req.body.id})
    }       
}

const deleteProduct = async (req,res)=>{
    if(typeof req.body != 'undefined'){
        try{
            await ProductSchema.findOneAndRemove(req.body.id);
            res.json({msg: 'Se ha eliminado el producto: ' + req.body.id}); 
        }
        catch(err){
            console.error(err);
        }
        }else{
            res.json({msg: "No se puede eliminar el producto."})
        }    
}

module.exports.getProduct = getProduct;
module.exports.getProducts = getProducts;
module.exports.createProduct = createProduct;
module.exports.updateProduct = updateProduct;
module.exports.deleteProduct = deleteProduct;