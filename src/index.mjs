// const express = require( 'express' );    // Importacion de dependencia usando CommonJS
import express from 'express';  // Importacion de dependencia usando ESModule
import user from "./routes/user.route.mjs";
import dbConnection from './config/mongo.config.mjs';

const app = express();    

// Invocando la ejecucion de Express
dbConnection();

app.use(express.json());                  //habilito el interprete

//endpoint:http://localhost:3000
app.use(user);

// listen: Lanzar el servidor en http://localhost:3000
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});