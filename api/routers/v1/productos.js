import { Router } from 'express';
import producto from '../../service/productos.js';

const router = Router();

router.get('/', producto.getProducto);
router.get('/todos', producto.getTodosProducto);
router.post('/', producto.createProducto);
router.put('/:id', producto.updateProducto)
router.delete('/:id', producto.deleteProducto);

export { router };