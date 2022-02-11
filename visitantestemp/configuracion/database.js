const mongosee = require('mongoose');
const cadena = 'mongodb+srv://LemonyKitten:Mongo1171@clustervisitas.9rj2v.mongodb.net/visitas';
mongosee.connect(cadena,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
  .then(dato => {
    console.log('se conecto ');
  })
  .catch(error => {
    console.log('no lo logro', error);
  })
