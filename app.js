const express = require('express');
const app = express();

app.get('/makers/:nombre', (req, res) => {
    //http://localhost:3000/makers/juan

    if (!req.params.nombre || !req.params.nombre.length ) {
        res.send(`<h1>Hola desconocido!</h1>`);
    }else{
        res.send(`<h1>Hola ${req.params.nombre}!</h1>`);
    }
});

app.listen(3000, () => console.log('Listening on port 3000!'));