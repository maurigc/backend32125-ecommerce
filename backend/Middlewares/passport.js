import passport from "passport";
import passportLocal from "passport-local";
import { usuariosDao } from "../DAOs/factory.js";
import { loginPassport, signupPassport } from "../Controller/usuarios.controller.js";


const LocalStrategy = passportLocal.Strategy;

// ______________________________________________________________________________________________________
// Estrategia de passport para el inicio de sesión.
passport.use("login", new LocalStrategy({ passReqToCallback: true }, loginPassport))

// ______________________________________________________________________________________________________
// Estrategia de passport para registrarse.
passport.use("register", new LocalStrategy({ passReqToCallback: true }, signupPassport))




// Serialize user.
passport.serializeUser( (user, done) => {
    done(null, user._id);

})


// Deserialize User.
passport.deserializeUser( async(id, done) => {
    let user = await usuariosDao.getById(id);

    done(null, user)

})

export { passport };