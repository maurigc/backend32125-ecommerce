import { Router } from "express";
import { createCart, getCartById, getProductsInCart, saveProductInCart, deleteCart, finalizarCompra } from "../Controller/carritos.controller.js";
import { checkAuthenticated } from '../Middlewares/checkAuthenticated.js';

const router = Router();


// ______________________________________________________________________________________________________
// Ruta para crear un nuevo carrito.
router.post('/', checkAuthenticated, createCart)

// ______________________________________________________________________________________________________
// Ruta para obtener un carrito por su ID.
router.get('/:idCarrito', checkAuthenticated, getCartById)

// ______________________________________________________________________________________________________
// Ruta para obtener todos los productos de un determinado carrito.
router.get('/:idCarrito/productos', checkAuthenticated, getProductsInCart)

// ______________________________________________________________________________________________________
// Ruta para guardar productos en un determinado carrito.
router.post('/:idCarrito/productos/:idProducto', checkAuthenticated, saveProductInCart)

// ______________________________________________________________________________________________________
// Ruta para eliminar un carrito
router.delete('/:idCarrito', checkAuthenticated, deleteCart)

// ______________________________________________________________________________________________________
// Ruta para comprar un carrito
router.post('/:idCarrito/finalizarCompra', checkAuthenticated, finalizarCompra)




export { router } 