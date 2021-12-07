const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const pedidosSchema = new Schema({
    client: {
        type: Schema.ObjectId,
        ref:'clients'
    },
    pedido:[{
        products:{
            type: Schema.ObjectId,
            ref: 'products'
        },
        cantidad:Number
      }],
      total:{
          type : Number
      }

})

module.exports = mongoose.model('pedidos',pedidosSchema)