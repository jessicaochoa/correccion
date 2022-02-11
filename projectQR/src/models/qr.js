const schema = require('mongoose');
const  model = require('mongoose');
const registro = require('./registro');
const qrSchema = new schema.Schema({

    q_id: {type: schema.Types.ObjectId,
        ref:'id'
    },

    pk:{
        type: schema.Schema.Types.ObjectId,
        ref: "id"
    }
})

const qr = schema.model ('qr', qrSchema);
module.exports = qr;