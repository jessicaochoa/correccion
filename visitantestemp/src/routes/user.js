const Router = require('express');
const router = Router();
const modelUser = require('../models/visitantesExternos');

router.get('/',async (req,res)=> {
  const visitantes = await modelUser.find();
  res.json(visitantes);
  //res.send(`consulta realizada`);

})
router.post('/register',async (req,res)=>{
  const { idVisitante, nombre, apellidoP, apellidoM, correo, area, idTrabajador, motivo } = req.body;
  const nuevovisitante = new modelUser({idVisitante,nombre,apellidoP,apellidoM,
  correo,area,idTrabajador,motivo});
  console.log(nuevovisitante);
  await nuevovisitante.save();
  //console.log(req.body);
  res.json(nuevovisitante);
  //res.send('datos agregados');
})
//router.put()

router.get('/empleado/lista', async (req, res) => {
  const resultado = await modelUser.find();
  res.json(resultado);
})

router.get('/empleado/:area', async (req, res) => {
  const {area} = req.params;
  const resultado = await modelUser.findOne({"nombre":area});
  res.json(resultado);
})


module.exports=router;

