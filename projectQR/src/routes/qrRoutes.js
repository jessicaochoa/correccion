const{Router} = require('express');
const router = Router();

const modelQr = require('../models/qr');

router.get('/', async (require,res)=>{
    const datos = await modelQr.find();
    res.json(datos);
    //res.send("consulta realizada");
});

router.post('/', async (require,res)=>{
    const {q_id,pk} = require.body;
    const newQr = new modelQr({q_id,pk});
    console.log(newQr);

    await newQr.save(); //guardar en la db async y await hacen que las cosas se hagan al mismo tiempo
    //console.log(require.body);
    res.json(newQr);
   
   // res.send("datos agregados");
});

module.exports = router;