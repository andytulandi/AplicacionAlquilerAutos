import { Router } from 'express';
import { verificarToken } from '../middleware/auth.middleware.js';
import { crearAuto, 
        listarAutos,
        listarDisponibles,
        obtenerAuto,
        actualizarAuto,
        eliminarAuto
 } from '../controllers/autoController.js';
 import {
        validarCamposAuto,
        validarIdNumerico
        } from '../middleware/validar.middleware.js';
const router = Router();
router.get('/disponibles', listarDisponibles);
router.post('/', verificarToken, validarCamposAuto, crearAuto);
router.get('/', listarAutos);
router.get('/:id', validarIdNumerico, obtenerAuto);
router.put('/:id', verificarToken, validarIdNumerico, actualizarAuto);
router.delete('/:id', verificarToken, validarIdNumerico, eliminarAuto);
export default router;