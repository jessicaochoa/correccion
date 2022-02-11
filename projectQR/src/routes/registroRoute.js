const{Router} = require('express');
const datos = require('../models/datosGenerales');
const router = Router();

const modelregistro = require('../models/registro');
router.get('/', async (require,res)=>{
    const datos = await modelregistro.find();
    res.json(datos);
    //res.send("consulta realizada");
});

router.post('/', async (require,res)=>{
    const {id_Tipos, usuario, contraseña} = require.body;
    const newRegistro = new modelregistro({idDatos,id_Tipos, usuario, contraseña});
    console.log(newRegistro);

    await newRegistro.save(); //guardar en la db async y await hacen que las cosas se hagan al mismo tiempo
    //console.log(require.body);

    res.json(newRegistro);
   
   // res.send("datos agregados");
});

module.exports = router;