import { Router } from "express";
import { getProducto, getProductoById, saveProducto, updateProducto , deleteProducto } from "../Controller/productos.controller.js";
import { checkAuthenticated } from '../Middlewares/checkAuthenticated.js';
import { authorization } from "../Middlewares/authorization.js";

const router = Router();


// ______________________________________________________________________________________________________
// Ruta para traer todos los productos.
router.get('/productos', authorization, getProducto)

// ______________________________________________________________________________________________________
// Ruta para traer un producto por su ID.
router.get('/productos/:idProducto', checkAuthenticated, getProductoById)

// ______________________________________________________________________________________________________
// Ruta para guardar un producto.
router.post('/productos', checkAuthenticated, saveProducto)

// ______________________________________________________________________________________________________
// Ruta para actualizar un producto por su ID.
router.put('/productos/:idProducto', checkAuthenticated, updateProducto)

// ______________________________________________________________________________________________________
// Ruta para eliminar un producto por su ID.
router.delete('/productos/:idProducto', checkAuthenticated, deleteProducto)




export { router };