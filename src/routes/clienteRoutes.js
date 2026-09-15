import { Router } from 'express';
import { verificarToken } from '../middleware/auth.middleware.js';
import {
  registrarCliente,
  loginCliente,
  perfilCliente
} from '../controllers/clientecontroller.js';
import {
  validarCamposCliente,
  validarCredenciales
} from '../middleware/validar.middleware.js';

const router = Router();

router.post('/registro', validarCamposCliente, registrarCliente);
router.post('/login', validarCredenciales, loginCliente);
router.get('/perfil', verificarToken, perfilCliente);

export default router;