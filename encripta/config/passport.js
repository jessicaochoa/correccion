const { param } = require('express/lib/request');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const Usuario = require('../modelos/usuario');

passport.serializeUser((usuario,done)=>{
    done(null,usuario_id);   
})
passport.deserializeUser((id,done)=>{
    Usuario.findById(id, (err,usuario)=>{
        done(err,usuario);
    })
})

passport.use(new localStrategy(
    {usernameField: 'email'},
    (email, password, done)=>{
        Usuario.findOne({email}, (err, usuario)=>{
            if(!usuario){
                return done (null, false,{message:`este mail: ${email}, no esta registrado`});
            }else {
                usuario.compararPassword(password, (err, sonIguales)=>{
                    if(sonIguales){
                        return done(null, usuario);
                    }
                    else{
                        return done( null, false, {message: 'la constraseña no es valida '});
                    }
                })
            }
        })
    }
))

exports.estaAutentificdo=(req, res, next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    res.status(401).send('tienes que hacer login para acceder a este recurso');
}