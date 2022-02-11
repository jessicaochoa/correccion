const {Schema,model}= require('mongoose');
const vistanteSchema = new Schema({
  idArea:{
    type:String,
    requiere:true
  },
  nombreArea:{
    type:String,
    requiere:true
  }
})
module.exports=model('areas',vistanteSchema);
