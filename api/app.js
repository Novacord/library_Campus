import express from "express"
import rateLimit from "./config/rateLimit.js";
import routeIndex from "./routers/index.js";
import passport from "./helpers/discord.js";
import session from "express-session";
import "dotenv/config.js";
const app = express();


app.use(express.json());
const PORT = process.env.PORT || 3000;
app
    .use(rateLimit)

    .use(express.json())

    .use(session({secret: '12321', resave: false, saveUninitialized: false}))

    .use(passport.initialize())

    .use(passport.session())

    .use("/api", await routeIndex())

    .listen(PORT, ()=> {
        console.log(`server in http://127.10.10.10:${PORT}`);
    })