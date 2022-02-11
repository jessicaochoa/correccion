const Router = require('express');
const router = Router();
const modelArea = require('../models/area');

router.post('/insertar',async (req,res)=>{
  const {idArea,nombreArea} = req.body;
  const nuevaArea = new modelArea({idArea,nombreArea});
  
  await nuevaArea.save();
  //console.log(req.body);
  res.json(nuevaArea);
  //res.send('datos agregados');
})

router.get('/area/lista', async (req, res) => {
  const resultado = await modelArea.find();
  res.json(resultado);
})


module.exports=router;