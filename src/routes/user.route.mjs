import express from "express";   //importo dependencia
import { createUser } from "../controllers/user.controller.mjs";

const router = express.Router(); //invocando el router de express

//Definir las rutas para la entidad Product.
router.post( "/api/user" , createUser );

//exponer el router de este archivo para ser usado por otros en la aplicacion
export default router