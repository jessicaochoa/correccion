const {Schema, model} = require('mongoose');
const userSchema = new Schema({
    idUser:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    lastname:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

module.exports = model ('users', userSchema);