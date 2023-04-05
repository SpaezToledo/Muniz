const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

<<<<<<< HEAD
app.listen(port,()=> console.log('Abriendo el servidor en 3000 port'));  


const public= path.resolve(__dirname, 'public');
        


=======
app.listen(port,()=> console.log('Abriendo el servidor en localhost 3000'));  


const public= path.resolve(__dirname, 'public');

app.use(express.static(path.join(__dirname, "js")))
>>>>>>> c775109 (onload page & reorganization)

app.use(express.static(public));


app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './views/index.html')))  

<<<<<<< HEAD
app.get('/inConstruction', (_req, res) => res.sendFile(path.resolve(__dirname, './views/inConstruction.html')))
=======
app.get('/inConstruction', (req, res) => res.sendFile(path.resolve(__dirname, './views/inConstruction.html')))







>>>>>>> c775109 (onload page & reorganization)








