const mongoose = require('mongoose');
const cadena = 'mongodb+srv://tlaps:12345@clustertest.de0wf.mongodb.net/DatabaseQR';

mongoose.connect(cadena, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(dato =>{
    console.log('conectado');
})
.catch(error =>{
    console.log(error);
})