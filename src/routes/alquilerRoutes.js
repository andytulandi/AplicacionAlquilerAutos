import { Router } from 'express';
import { verificarToken } from '../middleware/auth.middleware.js';
import { 
    realizarAlquiler,
    historial,
    devolverVehiculo
} from '../controllers/alquilercontroller.js';
import {
    validarCamposAlquiler,
    validarIdNumerico
    } from '../middleware/validar.middleware.js';
const router = Router();
// Todas exigen token: un alquiler siempre pertenece a alguien identificado
router.post('/', verificarToken, validarCamposAlquiler, realizarAlquiler);
router.get('/historial', verificarToken, historial);
router.put('/devolver/:id', verificarToken, validarIdNumerico, devolverVehiculo);
export default router;