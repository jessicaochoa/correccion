const passport= require('passport');
const usuario = require('../modelos/usuario');
const Usuario= require('../modelos/usuario');

exports.postSingnup= (req, res, next)=>{
    const nuevoUsuario = new Usuario({
        email:req.body.email,
        nombre: req.body.nombre,
        password: req.body.password
    });
    Usuario.findOne({email: req.body.email},(err, usuarioExistente)=>{
        if(usuarioExistente){
            return res.satatus(300).send('ese email ya esta registrado'); 
        }
        nuevoUsuario.save((err)=>{
            if(err){
                next(err);
            }
            req.logIn(nuevoUsuario, (err)=>{
                if(err){
                    next(err);
                }
                res.send('usuario creado exitosamente ');
            })
        })
    })
}

exports.postLogin= (req, res, next)=> {
    passport.authenticate('local', (err,usuario,info)=>{
        if(err){
            next(err);
        }
        if(!usuario){
            return res.satatus(400).send('el Email o contraseña no son validos ')
        }
        req.logIn(usuario, (err)=>{
            if(err){
                next(err);
            }
            res.send('login exitoso');
        })
    })(req, res, next);
}

exports.logout =(req, res)=>{
    req.logout();
    res.send('logout exitoso');
}