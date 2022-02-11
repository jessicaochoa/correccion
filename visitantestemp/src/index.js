const express = require('express');
const app = express();
const morgan = require('morgan');
require('../configuracion/database');
const cors = require('cors');
//configuraciones
app.set('port',process.env.PORT || 4500);
app.set('json spaces',2);
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
//configurar ruta
//app.use(require('./routes/principal'));
////app.use('/api/peliculas',require('./routes/peliculas'));
app.use('/api/consulta',require('./routes/user'));
app.use('/api/Area',require('./routes/area'));
app.use('/api/Empleado',require('./routes/Empleados'));


app.listen(app.get('port'),()=>{
  // codigo ascci de backstick es alt+96
  console.log(`servidor en puerto ${app.get('port')}`);
});
