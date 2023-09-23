import { Router } from "express";
import { validate } from "../../validations/validateService.js";
import routesVersioning  from 'express-routes-versioning';
import passport from "passport";    

const router = Router()
const versiones = routesVersioning()

router.get('/login', passport.authenticate('discord'), (req, res) => {
    const userString = JSON.stringify(req.user)
    res.send(`
    <!doctype html>
<html lang="en">
  <body>
    <script>
        window.opener.postMessage(${userString}, 'http://localhost:5173/')
    </script>
  </body>
</html>
    `)
})

router.get('/informacion', (req, res)=>{
    const user = req.user;
    res.send(user)
})

router.get('/logout', (req, res)=>{
    req.logout(function (err) {
      if (err) return next(err);
    })
    console.log('salio')
    res.json({ msg: "logout session" });
})

export { router };