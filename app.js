const express = require('express');
const app = express();

app.get('/makers/:nombre', (req, res) => {
    //http://localhost:3000/makers/Juan
    const str = req.params.nombre;
const str2 = str.charAt(0).toUpperCase() + str.slice(1);

    if (!req.params.nombre || !req.params.nombre.length ) {
        res.send(`<h1>Hola desconocido!</h1>`);
    }else{
        res.send(`<h1>Hola ${str2}!</h1>`);
    }
});

app.listen(3000, () => console.log('Listening on port 3000!'));