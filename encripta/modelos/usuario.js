const bcrypt = require('bcrypt-nodejs');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema= new Schema({
    email: {type: String, unique: true, lowercase: true, required: true},
    password:{type: String, required: true},
    nombre: {type: String, required:true},
},{
    timestamps: true
})

//encriptacion 
usuarioSchema.pre('save', function(next){
    const usuario = this;
    if(!usuario.isModified('password')){
        return next();
    }
    bcrypt.genSalt(10, (err,salt)=>{
        if(err) {
            next(err);
        }
        bcrypt.hash(usuario.password, salt,null,(err,has)=>{
            if(err){
                next(err);
            }
            usuario.password=has;
            next();
        });
    })
})

usuarioSchema.methods.compararPassword =function(password, cb){
    bcrypt.compare(password, this.password, (err, sonIguales)=>{
        if(err){
            return cb (err);
        }
        cb(null, sonIguales);
    })
}

module.exports= mongoose.model('usuario', usuarioSchema);