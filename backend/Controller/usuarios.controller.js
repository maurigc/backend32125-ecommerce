import { logWarn } from "../Scripts/loggers.js";
import { encriptar, comparar } from "../Scripts/encryptingData.js";
import { obtenerUsuarios, guardarUsuario } from '../Service/usuarios.service.js';
import { transport } from "../Scripts/nodemailer.js";


// ______________________________________________________________________________________________________
// Controlador para iniciar sesión.
const postLogin = (req, res) => {
    req.session.user = req.user;

    res.status(200).json({ msj: 'Inicio de sesión con éxito' })
}


// ______________________________________________________________________________________________________
// Controlador para cerrar sesión.
const getLogout = async(req, res) => {
    try {
        req.session.destroy(error => {
            if(error){
                res.status(404).json({ error: 'No se pudo cerrar sesión.'})
            }
        })
    
        res.status(200).json({ msj: 'Sesión cerrada con éxito.'})
        
    } catch (error) {
        logWarn.error(error);
    }
}


// ______________________________________________________________________________________________________
// Controlador para registrarse.
const postSignup = (req, res) => {
    res.status(200).json({
        msj: 'Registrado con éxito.',
        user: req.user
    })
}


// ______________________________________________________________________________________________________
// Controlador para Login de passport.
const loginPassport = async(req, username, password, done ) => {
    try {
        const usuarios = await obtenerUsuarios();
    
        const user = usuarios.find( user => user.username === username);
    
        if(user){
            const validarPassword = comparar(user, password);
    
            if(validarPassword){
                return done(null, user);
    
            }else{
                return done(null, false);
            }
    
        }else{
            return done(null, false);
    
        }
        
    } catch (error) {
        logWarn.error(error);
    }
}


// ______________________________________________________________________________________________________
// Controlador para signup de passport.
const signupPassport = async(req, username, password, done) => {
    try {
        const usuarios = await obtenerUsuarios();
    
        const user = usuarios.find( user => user.username === username);
    
        if(user){
            return done(null, false);

        }else{

            const newUser = req.body;

            newUser._id = usuarios.length === 0 ? 1 : usuarios.length + 1
            newUser.password = encriptar(newUser.password);

           
            await guardarUsuario(newUser);
            
            const mailOptions = {
                from: 'Ecommerce-c32125',
                to: username,
                subject: 'Nuevo registro',
                html: (`
                    <h1 style="color: green;">Registradx con éxito!</h1>
                    <h2>Detalles de la cuenta:</h2>
                    <ul>
                        <li style="font-weith: bolder, font-size: 20px">Nombre:<span style="color: gray"> ${newUser.nombre}</span></li>
                        <li style="font-weith: bolder, font-size: 20px">Dirección:<span style="color: gray"> ${newUser.direccion}</span></li>
                        <li style="font-weith: bolder, font-size: 20px">Edad:<span style="color: gray"> ${newUser.edad}</span></li>
                        <li style="font-weith: bolder, font-size: 20px">Telefono:<span style="color: gray"> ${newUser.telefono}</span></li>
                    </ul>
                    `)
            }
            
            await transport.sendMail(mailOptions);
           
            return done(null, newUser);
        
            
            


         }
        
    } catch (error) {
        logWarn.error(error);
    }
}

export { postLogin, getLogout, postSignup, loginPassport, signupPassport };