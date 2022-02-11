const{Router} = require('express');
const router = Router();

const cartelera = require('../routes/movies.json');

const reccorre = require('underscore');

router.get('/', (require, res)=>{
    res.json(cartelera); 
});

router.post('/', (require,res)=>{
   // console.log(require.body); // recuperar la info en la consola
    const {id,nombre,año} = require.body;
    if(id && nombre && año){
        const add = {...require.body}; //se recupera lo del postman
        cartelera.push(add); //aqui se agrega al json
        res.json(cartelera);
    }
    else{
        res.send("error de datos");
    }
       
});

router.delete('/:id', (require,res)=>{
    const {id} = require.params;
    reccorre.each(cartelera, (registro, i)=>{
        if(registro.id == id){
            cartelera.splice(i,1);
            res.json(cartelera);
            console.log("se ha borrado tio :C");
        }
        else{
            res.send("error al eliminar");
        }
    });
});

router.put('/:id', (require,res)=>{
    const {ids} = require.params;
    const {id,nombre,año} = require.body;
    if(nombre && año){
        reccorre.each(cartelera, (registro, i)=>{
            if(registro.id == ids){
                cartelera.id= id;
                cartelera.nombre = nombre;
                cartelera.año = año;
                res.json(cartelera);
                console.log("se ha actualizado tio :)");
            }
            else{
                res.send("error al actualizar");
            }
       
        });
    }
});

module.exports = router;