const {Schema,model}= require('mongoose');
const vistanteSchema = new Schema({
  idEmpleado:{
    type:String,
    requiere:true
  },
  nombre:{
    type:String,
    requiere:true
  },
  apellidoP:{
    type:String,
    requiere:true
  },
  apellidoM:{
    type:String,
    requiere:true
  },
  correo:{
    type:String,
    requiere:true
  },
  area:{
    type:String,
    requiere:true
  }
})
module.exports=model('empleados',vistanteSchema);
