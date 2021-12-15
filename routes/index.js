const express = require('express');
const router = express.Router();
const clientsController = require('../controller/clientsController');
const productsController = require('../controller/productsController');
const pedidosController = require('../controller/pedidosController');

module.exports = function(){
    //Add clients
    router.post('/clients',clientsController.newclients)
    //see clients
    router.get('/clients',clientsController.seeclients)
    //see client for id
    router.get('/clients/:idClient',clientsController.seeclient)
    //update
    router.put('/clients/:idClient',clientsController.updateclient)
    //delete
    router.delete('/clients/:idClient',clientsController.deleteclient)

    /** PRODUCTOS */
    //add product
       //Add clients con imagenes
       router.post('/products',
       productsController.subirarchivo,
       productsController.newproducts)
       
       router.get('/products',productsController.seeproducts)

       router.get('/products/:idProduct',productsController.seeProduct)

       router.put('/products/:idProduct',
       productsController.subirarchivo,
       productsController.updateproduct)

       router.delete('/products/:idProduct',productsController.deleteProduct)

       /**PEDIDOS */

       router.post('/pedidos',pedidosController.newPedidos)

       router.get('/pedidos',pedidosController.seepedidos)

       router.get('/pedidos/:idPedidos',pedidosController.seepedido)

       router.put('/pedidos/:idPedidos',pedidosController.updatepedido)

       router.delete('/pedidos/:idPedidos',pedidosController.deletepedido)

       
    return router;
}

