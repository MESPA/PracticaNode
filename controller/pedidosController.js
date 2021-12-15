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
    try {
        const pedidos  = await Pedidos.find({})
        res.json(pedidos)

    } catch (error) {
        console.log(error)
        next();
    }
}

exports.seepedido = async(req,res,next)=>{
    const pedidos = await Pedidos.findById(req.params.idPedidos)
    if (!pedidos) {
        res.json({ message :'No hay pedido con ese identificador'})
        next();
    }
    res.json(pedidos)
}

exports.updatepedido = async(req,res,next)=>{

    try {
        const  pedidos = await Pedidos.findOneAndUpdate(
            {_id:req.params.idPedidos},
            req.body,{
                new: true
            })
            res.json(pedidos)
    } catch (error) {
        console.log(error)
        next();
    }
}

exports.deletepedido = async(req,res,next)=>{
    try {
        await Pedidos.findOneAndDelete(
            {_id: req.params.idPedidos}
        );
        res.json({message : 'Is delete correct'})
    } catch (error) {
        console.log(error)
        next();
    }
}