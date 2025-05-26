import express from "express";   //importo dependencia
import { createUser, getAllUser } from "../controllers/user.controller.mjs";

const router = express.Router(); //invocando el router de express

//Definir las rutas para la entidad Product.
router.post( "/api/user" , createUser );
router.get ("/api/user", getAllUser);

//exponer el router de este archivo para ser usado por otros en la aplicacion
export default router