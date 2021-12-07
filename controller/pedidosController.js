const Pedidos = require('../models/pedidos')


exports.newPedidos = async(req,res,next)=>{
    const pedidos = new Pedidos(req.body)

    try {
        await pedidos.save();
        res.json('Se agrego el pedido correctamente')
        
    } catch (error) {
        console.log(error)
        next();
    }
}

exports.seepedidos = async(req,res,next)=>{
    
}