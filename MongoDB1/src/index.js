//Llamada a la libreria 
const express = require('express');
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 9000;
app.listen(9000, () => console.log('server listening on port', port))

//rutas (peticiones y solicitudes)
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API');
})

//conexion a mongoDB


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://deikerperez10:1234@cluster0.ax4v2pu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("Cluster0").collection("devices");
    // perform actions on the collection object
    client.close();
});
