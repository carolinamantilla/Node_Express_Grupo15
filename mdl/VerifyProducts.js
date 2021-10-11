const ProductSchema = require('../models/product')

const verifyProducts = async (req, res, next) => {
    let products = await ProductSchema.find();

    req.body.productos.forEach(item =>{
        if(products.filter(product => product._id == item.id).length === 0){
            res.json({msg: 'El producto no existe, id :'+ item.id});
        }        
    })    
    next();
}

module.exports = verifyProducts;