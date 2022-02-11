const{Router} = require('express');
const router = Router();

const modelUser = require('../models/users');

router.get('/', async (require,res)=>{
    const users = await modelUser.find();
    res.json(users);
    //res.send("consulta realizada");
});

router.post('/', async (require,res)=>{
    const {idUser, name, lastname} = require.body;
    const newUser = new modelUser({idUser, name, lastname});
    console.log(newUser);

    await newUser.save(); //guardar en la db async y await hacen que las cosas se hagan al mismo tiempo
    //console.log(require.body);
    res.json(newUser);

   // res.send("datos agregados");
});

module.exports = router;
