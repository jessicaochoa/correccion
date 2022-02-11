const { type } = require('express/lib/response');
const schema = require('mongoose');
const  model = require('mongoose');
const datosGenerales = require('./datosGenerales');
const registroSchema = new schema.Schema({

    r_id: {type: schema.Types.ObjectId,
        ref:'qr_id'
    },

    pk:{
       type: schema.Schema.Types.ObjectId,
       ref: "datos"
    },

    id_Tipos:{
        type: String,
        require: true
    },
    usuario:{
        type: String,
        require: true
    },
    contraseña:{
        type: String,
        require: true
    }
})
const registro = schema.model ('registro', registroSchema);
module.exports = registro;