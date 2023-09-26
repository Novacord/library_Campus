import { Router } from 'express';
import producto from '../../service/productos.js';

const router = Router();

router.get('/', producto.getProducto);

export { router };