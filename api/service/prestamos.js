import { ObjectId } from 'mongodb';
import db from '../config/connectMongo.js';

const prestamos = db.getInstance().changeCollection('prestamos').connect()
const productos = db.getInstance().changeCollection('productos').connect(); // Agregamos la colección de libros


export default class prestamo {
    static async getPrestamos(req, res) {
        let data = await prestamos.find().toArray();
        res.status(200).send(data)
    }
    static async crearPrestamo(req, res) {
        try {
            const nuevoPrestamo = req.body;
            
            // Verificamos el estado del libro
            const libro = await productos.findOne({ _id: new ObjectId(nuevoPrestamo.libro) });
            if (libro && libro.estado === 'prestado') {
                res.status(400).send('El libro ya está prestado.');
                return;
            }
            
            nuevoPrestamo.tituloLibro = libro.titulo

            // Cambiamos el estado del libro a "prestado"
            await productos.updateOne({ _id: new ObjectId(nuevoPrestamo.libro) }, { $set: { estado: 'prestado' } });

            const resultado = await prestamos.insertOne(nuevoPrestamo);

            res.status(201).send(resultado);
        } catch (error) {
            res.status(500).send('Error al crear un nuevo préstamo.');
        }
    }

    static async actualizarPrestamo(req, res) {
        try {
            const id = req.params.id; // Supongamos que el ID del préstamo se pasa como parámetro en la URL
            const datosActualizados = req.body; // Asume que los datos actualizados están en el cuerpo de la solicitud
            const resultado = await prestamos.updateOne({ _id: new ObjectId(id) }, { $set: datosActualizados });
            if (resultado.matchedCount === 0) {
                res.status(404).send('Préstamo no encontrado.');
            } else {
                res.status(200).send('Préstamo actualizado correctamente.');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al actualizar el préstamo.');
        }
    }

    static async eliminarPrestamo(req, res) {
        try {
            const id = req.params.id;
            const prestamo = await prestamos.findOne({ _id: new ObjectId(id) }); // Obtener el préstamo antes de eliminarlo
            
            if (!prestamo) {
                res.status(404).send('Préstamo no encontrado.');
                return;
            }

            const resultado = await prestamos.deleteOne({ _id: new ObjectId(id) });

            // Cambiamos el estado del libro a "disponible" solo si el préstamo se eliminó correctamente
            if (resultado.deletedCount > 0) {
                await productos.updateOne({ _id: new ObjectId(prestamo.libro) }, { $set: { estado: 'disponible' } });
            }

            res.status(200).send('Préstamo eliminado correctamente.');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al eliminar el préstamo.');
        }
    }
}