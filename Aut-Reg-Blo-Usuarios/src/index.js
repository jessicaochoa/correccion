const express = require ('express');
const app = express();
const morgan = require ('morgan');
require ('../src/app/backend/db');

//Configuraciones
app.set('port', process.env.PORT);
app.set('json spaces', 2);
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.listen (app.get('port'), ()=>{
    console.log(`Servidor en puerto ${app.get('port')}`);
 });
 