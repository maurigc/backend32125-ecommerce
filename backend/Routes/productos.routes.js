import { Router } from "express";
import { getProducto, getProductoById, saveProducto, updateProducto , deleteProducto } from "../Controller/productos.controller.js";
import { checkAuthenticated } from '../Middlewares/checkAuthenticated.js';

const router = Router();


// ______________________________________________________________________________________________________
// Ruta para traer todos los productos.
router.get('/productos', checkAuthenticated, getProducto)

// ______________________________________________________________________________________________________
// Ruta para traer un producto por su ID.
router.get('/productos/:id', checkAuthenticated, getProductoById)

// ______________________________________________________________________________________________________
// Ruta para guardar un producto.
router.post('/productos', checkAuthenticated, saveProducto)

// ______________________________________________________________________________________________________
// Ruta para actualizar un producto por su ID.
router.put('/productos/:id', checkAuthenticated, updateProducto)

// ______________________________________________________________________________________________________
// Ruta para eliminar un producto por su ID.
router.delete('/productos/:id', checkAuthenticated, deleteProducto)




export { router };