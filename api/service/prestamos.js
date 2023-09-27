import { ObjectId } from 'mongodb';
import db from '../config/connectMongo.js';

const prestamos = db.getInstance().changeCollection('prestamos').connect()

export default class prestamo {
    static async getPrestamos(req, res) {
        let data = await prestamos.find().toArray();
        res.status(200).send(data)
    }
}