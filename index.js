const express = require('express');//npm install express morgan moongase
const app = express();
const morgan = require('morgan');

require('../configuration/db')

//configuraciones
app.set('port', process.env.PORT || 1919); //usar un puerto en especifico o el que nosotros damos

app.set('json spaces', 2); // darle espacios al json en el explorador

app.use(morgan('dev')); // para que se reinicie el servidor desde el package.json automaticamente

app.use(express.urlencoded({extended:false}));
app.use(express.json()); //aqui le decimos que se trabaje con JSON

app.use(require('./routes/main'));
app.use('/api/movies', require('./routes/movies'));//cambiamos el nombre de la ruta
app.use('/api/consulta', require('./routes/userRoute'));
app.use('/api/guardar', require('./routes/userRoute'));

//QR rutas

app.use('/api/datos', require('./routes/datosRoute'));
app.use('/api/registro', require('./routes/registroRoute'));
app.use('/api/qr', require('./routes/qrRoutes'));


app.listen(app.get('port'), ()=>{
    //codigo ascci de backstick alt+96
    console.log(`servidor en puerto ${app.get('port')}`);
});
