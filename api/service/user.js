import { ObjectId } from 'mongodb';
import db from '../config/connectMongo.js';

const users = db.getInstance().changeCollection('usuarios').connect()

export default class user {
    static async login(req, res) {
        const { username, password } = req.body;
        let data = await users.findOne({  username: username, password: password})
        res.status(200).json(data);
    }
}