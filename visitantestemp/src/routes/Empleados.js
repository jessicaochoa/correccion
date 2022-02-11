const Router = require('express');
const router = Router();
const modelEmpleado = require('../models/empleados');

router.post('/insertar',async (req,res)=>{
    const { idEmpleado, nombre, apellidoP, apellidoM, correo, area } = req.body;
    console.log(nombre);
  const nuevovisitante = new modelEmpleado({idEmpleado,nombre,apellidoP,apellidoM,correo,area});

  await nuevovisitante.save();
  //console.log(req.body);
  res.json(nuevovisitante);
  //res.send('datos agregados');
})


router.get('/select', async (req, res) => {
  const resultado = await modelEmpleado.find();
  res.json(resultado);
})




module.exports=router;