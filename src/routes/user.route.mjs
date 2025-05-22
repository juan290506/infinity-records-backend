// File Routes: Definir los Endpoints de una entidad
import { Router } from 'express';       // Importando el Router de Express
import { createUser } from '../controllers/user.controllers.mjs';
const router = Router();                // Invocando Router (Preparandolo para definir rutas)



router.post( '/api/user', createUser );


export default router;                  // Exportando todas las rutas de esta entidad para ser usadas en cualquier parte de la aplicacion