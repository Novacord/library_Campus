import { ObjectId } from 'mongodb';
import db from '../config/connectMongo.js';

const productos = db.getInstance().changeCollection('productos').connect()

export default class producto {
    static async getProducto(req, res) {
        let data = await productos.find().toArray();
        res.status(200).send(data)
    }
}