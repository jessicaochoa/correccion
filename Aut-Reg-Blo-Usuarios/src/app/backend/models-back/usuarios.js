const {Schema, model} = require ('mongoose');
const loginSchema = new Schema({
    Usuario: {
        type: String,
        require: true
    },
    Password: {
        type: String,
        require: true
    }
})
module.exports = model('login', loginSchema);
