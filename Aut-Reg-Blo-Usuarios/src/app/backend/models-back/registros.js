const {Schema, model} = require ('mongoose');
const registerSchema = new Schema({
    Nombres: {
        type: String,
        require: true
    },
    Apellidos: {
        type: String,
        require: true
    },
    TipoUsuario: {
        type: String,
        require: true
    },
    Usuario: {
        type: String,
        require: true
    },
    Password: {
        type: String,
        require: true
    },
    FechaRegistro: {
        type: Date,
        default: Date.now()
    }
})
module.exports = model('registro', registerSchema);