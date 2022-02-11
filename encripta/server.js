const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportConfig= require('./config/passport');


const MONGO_URL='mongodb://127.0.0.1:27017/auth';
const app = express();

mongoose.Promise= global.Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error',(err)=>{
    throw err;
    process.exit(1);
})

app.use(session({
    secret: 'ESTO ES SECRETO ',
    resave: true,
    saveUninitialized: true,
    store:MongoStore.create({
        mongoUrl:MONGO_URL,
        autoReconnect: true
    })
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,resp)=>{
    req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1 : 1;
    resp.send(`hola has visto esta pagina ${req.session.cuenta}`); 
});

const controladorUsuario =require('./controladores/usuario');
app.post('/signup',controladorUsuario.postSingnup);
app.post('/login', controladorUsuario.postLogin);
app.get('/login',passportConfig.estaAutentificdo,controladorUsuario.logout);


app.get('/usuarioInfo',passportConfig.estaAutentificdo, (req, res)=>{
    res.json(req,user);
});

app.listen(3000, () =>{
    console.log('escuchando en el puerto 3000');
});