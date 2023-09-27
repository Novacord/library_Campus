import { Router } from 'express';
import prestamo from '../../service/prestamos.js'

const router = Router();

router.get('/', prestamo.getPrestamos); 

export { router };