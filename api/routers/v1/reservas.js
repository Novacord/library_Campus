import { Router } from 'express';
import reserva from '../../service/reservas.js'

const router = Router();

router.post('/', reserva.postProducto);

export { router };