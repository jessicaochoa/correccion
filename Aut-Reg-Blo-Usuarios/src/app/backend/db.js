const mongoose = require ('mongoose');
const url = 'mongodb+srv://Alan11:Knotslip@clustertese.g8dvg.mongodb.net/ProyectoTESE';

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
        .then(dato =>{
            console.log('Base conectada');
        })
.cath(error =>{
    console.log('Error de conexion', error);
})