import { ObjectId } from 'mongodb';
import db from '../config/connectMongo.js';

const reservas = db.getInstance().changeCollection('reservas').connect()

export default class reserva {
    static async postProducto(req, res) {
        const consulta = await reservas.insertOne(req.body)
        try {
            res.status(200).send(consulta)    
        }catch(err){
            res.send(err)
        }
        
    }
}