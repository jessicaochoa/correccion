const{Router} = require('express');
const router = Router();

router.get('/', (require,res)=>{ //ruta
    const datos = {
        "id": "1",
        "nombre": "Cesar",
        "telefono": "557772"
    }
    res.json(datos);
});

module.exports = router;
