import { Router } from 'express';
import Prestamo from '../../service/prestamos.js';

const router = Router();

router.get('/', Prestamo.getPrestamos);
router.post('/', Prestamo.crearPrestamo);
router.put('/:id', Prestamo.actualizarPrestamo);
router.delete('/:id', Prestamo.eliminarPrestamo);

export { router };
