import { ObjectId } from 'mongodb';
import db from '../config/connectMongo.js';

const productos = db.getInstance().changeCollection('productos').connect()

export default class producto {
    static async getProducto(req, res) {
        let data = await productos.find({ estado: "disponible" }).toArray();
        res.status(200).send(data)
    }
    static async getTodosProducto(req, res) {
        try {
            const data = await productos.find().toArray();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los productos' });
        }
    }

    // Crear un nuevo producto
    static async createProducto(req, res) {
        const nuevoProducto = req.body;
        try {
            await productos.insertOne(nuevoProducto);
            res.status(200).json({ mensaje: 'Producto actualizado correctamente' });
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el producto' });
        }
    }

    // Actualizar un producto por ID
    static async updateProducto(req, res) {
        const id = req.params.id;
        const datosActualizados = req.body;
        try {
            const resultado = await productos.updateOne({ _id: new ObjectId(id) }, { $set: datosActualizados });
            res.status(200).json({ mensaje: 'Producto actualizado correctamente' });
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el producto' });
        }
    }

    // Eliminar un producto por ID
    static async deleteProducto(req, res) {
        const id = req.params.id;
        try {
            await productos.deleteOne({ _id: new ObjectId(id) });
            res.status(200).json({ mensaje: 'Producto eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el producto' });
        }
    }
}