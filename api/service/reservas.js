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

    static async deleteReservaId(req, res) {
      try {
        const id = req.params.id;
    
        // Utiliza el método deleteOne para eliminar la reserva por su ID
        const result = await reservas.deleteOne({ _id: new ObjectId(id) });
    
        if (result.deletedCount === 1) {
          res.status(200).json({ message: "Reserva eliminada exitosamente" });
        } else {
          res.status(404).json({ error: "Reserva no encontrada" });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error al eliminar la reserva" });
      }
    }

    static async getTodasReservas(req, res) {
      try {
        const reservasConLibros = await reservas.aggregate([
          {
            $addFields: {
              libroObjectId: { $toObjectId: "$libroId" }
            }
          },
          {
            $lookup: {
              from: "productos", // Nombre de la colección de libros en tu base de datos
              localField: "libroObjectId",
              foreignField: "_id",
              as: "libro"
            }
          },
          {
            $unwind: "$libro"
          }
        ]).toArray();
    
        res.status(200).send(reservasConLibros);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error al obtener las reservas con los detalles de los libros" });
      }
    }

    static async actualizarEstadoReserva(req, res) {
      try {
        const { reservaId } = req.params; 
        const nuevoEstado = 'aceptado'; 
    
        const result = await reservas.updateOne({ _id: new ObjectId(reservaId) }, { $set: { estado: nuevoEstado } });
    
        if (result.modifiedCount > 0) {
          // Si se actualizó la reserva, envía una respuesta exitosa.
          res.status(200).json({ message: `La reserva con ID ${reservaId} fue cambiada a aceptado` });
        } else {
          // Si no se encontró la reserva para actualizar, envía un mensaje de error apropiado.
          res.status(404).json({ message: `No se encontró la reserva con ID ${reservaId}` });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error al cambiar el estado de la reserva a aceptado" });
      }
    }
    
}
