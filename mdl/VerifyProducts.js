const ProductSchema = require('../models/product')

const verifyProducts = async (req, res, next) => {
    let products = await ProductSchema.find();

    req.body.products.forEach(item =>{
        if(products.filter(product => product._id == item._id).length === 0){
            res.json({msg: 'El producto no existe, id :'+ item._id});
        }        
    })    
    next();
}

module.exports = verifyProducts;