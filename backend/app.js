import express from 'express';
import session from 'express-session';

import { router as productosRoutes } from './Routes/productos.routes.js';
import { router as usuariosRoutes } from './Routes/usuarios.routes.js';
import { router as carritosRoutes } from './Routes/carritos.routes.js';

import { config } from './config.js';
import passport from 'passport';
import compression from 'compression';
import cors from 'cors';

const app = express();


// _________________________________________________ MIDDLEWARES _____________________________________________________

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(config.session));
app.use(passport.initialize());
app.use(passport.session());
app.use(compression());
app.use(cors(config.cors));

// _________________________________________________ ROUTES _____________________________________________________

app.use('/api', productosRoutes);
app.use('/api/auth', usuariosRoutes);
app.use('/api/cart', carritosRoutes);






export { app };