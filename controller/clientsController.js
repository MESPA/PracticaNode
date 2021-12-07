const Clients = require('../models/clients')

//agregar new clients

exports.newclients = async (req,res,next) => {

    const client = new Clients(req.body)

    try {
        //add register
        await client.save();
        res.json({message : 'Add Fine'})
    } catch (error) {
        
        console.log(error)
        next();
    }
 
}

exports.seeclients = async(req,res,next)=>{
    //see client
    try {
        const client = await Clients.find({});
        res.json(client)
    } catch (error) {
        console.log(error)
        next();
    }

}

//see client for id
exports.seeclient = async(req,res,next)=>{
    //see client for id
     const client = await Clients.findById(req.params.idClient);

     if (!client) {
         res.json({ message: 'it is client not exist'})
         next();
     }
     res.json(client)
       
    

}
//update client for id
exports.updateclient = async (req,res,next)=>{

    try {
        const client = await Clients.findOneAndUpdate(
            {_id: req.params.idClient},
            req.body,{
                new : true
            });

            res.json(client)
    } catch (error) {
        console.log(error)
        next();
    }
}

//delete and cliente
exports.deleteclient = async (req,res,next)=>{

    try {
        await Clients.findOneAndDelete(
            {_id: req.params.idClient});

            res.json({message : 'Documents delete'})
    } catch (error) {
        console.log(error)
        next();
    }
}

