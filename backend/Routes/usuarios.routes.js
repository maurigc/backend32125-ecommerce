import { Router } from "express";
import { passport } from '../Middlewares/passport.js';
import { postLogin, getLogout, postSignup } from "../Controller/usuarios.controller.js";

const router = Router();


// ______________________________________________________________________________________________________
// Ruta para iniciar sesion.
router.post('/login', passport.authenticate('login', {
    failureRedirect: '/api/auth/login'
}), postLogin)


// ______________________________________________________________________________________________________
// Ruta para cerrar la session.
router.get('/logout', getLogout)


// ______________________________________________________________________________________________________
// Ruta para registrarse.
router.post('/signup', passport.authenticate('register',{
    failureRedirect: '/api/auth/login'
}), postSignup)

export { router }