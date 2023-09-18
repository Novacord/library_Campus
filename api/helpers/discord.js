import { Strategy } from 'passport-discord';
import passport from 'passport';
import "dotenv/config";

passport.serializeUser((user,done) => {
    done(null,user);
})

passport.deserializeUser((user,done) => [
    done(null,user)
])

passport.use(new Strategy({
    clientID: process.env.ID_DISCORD,
    clientSecret: process.env.KEY_DISCORD,
    callbackURL: '',
    scope: ['identify', 'guilds']
},(acessToken, refreshToken, profile, done)=>{
    try {
        console.log(profile)
        done(null, profile)
    } catch (error) {
        done(error, null)        
    }
}))

export default passport