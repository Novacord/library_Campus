import { Router } from 'express';
import reserva from '../../service/reservas.js'

const router = Router();

router.post('/', reserva.postProducto);

router.get('/IdUser/:id', reserva.getReservaId)

router.delete('/:id', reserva.deleteReservaId)

router.get('/', reserva.getTodasReservas)

router.put('/:reservaId', reserva.actualizarEstadoReserva)

export { router };