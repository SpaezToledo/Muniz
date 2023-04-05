const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port,()=> console.log('Abriendo el servidor en localhost 3000'));  


const public= path.resolve(__dirname, 'public');

app.use(express.static(path.join(__dirname, "js")))

app.use(express.static(public));


app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './views/index.html')))  

app.get('/inConstruction', (req, res) => res.sendFile(path.resolve(__dirname, './views/inConstruction.html')))















