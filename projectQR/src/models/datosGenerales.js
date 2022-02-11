const schema = require('mongoose');
const  model = require('mongoose');
const registroSchema = new schema.Schema({

    //d_id: {type: schema.Types.ObjectId,
      //   ref:'r_id'
    //},

    nombre:{
        type: String,
        require: true
    },
    a_Paterno:{
        type: String,
        require: true
    },
    a_Materno:{
        type: String,
        require: true
    },
    celular:{
        type: String,
        require: true
    },
    sexo:{
        type: String,
        require: true
    },
    dia:{
        type: String,
        require: true
    },
    mes:{
        type: String,
        require: true
    },
    año:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    contraseña:{
        type: String,
        require: true
    },
})

const datos = schema.model ('datos', registroSchema);
module.exports = datos;
