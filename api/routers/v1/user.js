import { Router } from "express";
import { validate } from "../../validations/validateService.js";
import routesVersioning  from 'express-routes-versioning';
import passport from "passport";

const router = Router()
const versiones = routesVersioning()

router.get('/login', passport.authenticate('discord'))

router.get('/informacion', (req, res)=>{
    const user = req.user;
    res.send(user)
})

export { router };