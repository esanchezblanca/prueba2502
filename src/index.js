const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const PORT = process.env.PORT || 8080

const apiRouter = require('./routes/api');

const app = express();
require('./db');

app.use(express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



//Respuesta de la app en el localhost si funciona correctamente
app.use('/api', apiRouter);


//Determinamos en qué puerto se levanta
app.listen(PORT,() => {
    console.log('Server levantado')
});