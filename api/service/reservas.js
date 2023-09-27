import { ObjectId } from 'mongodb';
import db from '../config/connectMongo.js';

const reservas = db.getInstance().changeCollection('reservas').connect();
const productos = db.getInstance().changeCollection('productos').connect();

export default class Reserva {
    static async postProducto(req, res) {
        try {
            // Insertar la reserva en la colección de reservas
            const consultaReserva = await reservas.insertOne(req.body);

            // Obtener el ID del libro reservado
            const libroId = req.body.libroId;

            // Actualizar el estado del libro a "EnProceso"
            const estadoLibro = await productos.updateOne(
                { _id: new ObjectId(libroId) },
                { $set: { estado: 'EnProceso' } }
            );

            // Enviar una respuesta que incluye ambas consultas
            res.status(200).send('ta bien');
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al procesar la reserva' });
        }
    }
    static async getReservaId(req, res) {
      try {
        const id = req.params.id; // Supongamos que estás pasando el ID del usuario en los parámetros de la URL
    
        // Realiza una consulta de agregación para unir las colecciones "reservas" y "libros"
        const reservasConNombresLibros = await reservas.aggregate([
          {
              $match: {
                idUsuario: id,
              }
          },
          {
              $addFields: {
                libroObjectId: { $toObjectId: "$libroId" }
              }
          },
          {
              $lookup: {
                from: 'productos', 
                localField: 'libroObjectId',
                foreignField: '_id',
                as: 'libro',
              },
          },
          {
              $project: {
                _id: 1,
                idUsuario: 1,
                usuario: 1,
                libro: 1, // Incluye el campo 'libro' que contiene la información del producto
                fechaInicio: 1,
                fechaFinal: 1,
                estado: 1,
              }
            }
      ]).toArray();
        console.log(reservasConNombresLibros)
        if (reservasConNombresLibros) {
          res.status(200).json(reservasConNombresLibros);
        } else {
          res.status(404).json({ error: 'Libro no encontrado' });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener la reserva' });
      }
    }
}
