import { ordenesDao } from "../DAOs/factory.js";
import { logWarn } from "../Scripts/loggers.js";
import { transport } from "../Scripts/nodemailer.js";
import { crearHtmlMail } from "../Scripts/createMail.js";
import { crearCarrito, obtenerCarritoPorId, guardarProductoEnCarrito, eliminarCarritoPorId } from "../Service/carritos.service.js";
import { obtenerProductoPorId } from '../Service/productos.service.js';

// ______________________________________________________________________________________________________
// Controlador para crear un carrito.
const createCart = async(req, res) => {
    try {
        await crearCarrito();
        
        res.status(200).json({ msj: 'Carrito creado con éxito.'})
    } catch (error) {
        logWarn.error(error);
    }


}


// ______________________________________________________________________________________________________
// Controlador obtener un carrito por su ID.
const getCartById = async(req, res) => {
    try {
        const { idCarrito } = req.params;
    
        const carrito = await obtenerCarritoPorId(idCarrito);

        if( !carrito || carrito.isDeleted === true){
            res.status(400).json(`El carrito con ID:${idCarrito} no existe.`)
        }else{ 
            res.status(200).json(carrito);
        }
        
    } catch (error) {
        logWarn.error(error);
    }

}


// ______________________________________________________________________________________________________
// Controlador para obtener todos los productos de un determinado carrito.
const getProductsInCart = async(req, res) => {
    try {
        const { idCarrito } = req.params;
    
        const carrito = await obtenerCarritoPorId(idCarrito);

        if(!carrito || carrito.isDeleted === true){
            res.status(400).json({ msj: `El carrito con ID:${idCarrito} no existe.`})
        }
    
        res.status(200).json( carrito.productos );
        
    } catch (error) {
        logWarn.error(error);
    }
}


// ______________________________________________________________________________________________________
// Controlador para guardar un producto en un determinado carrito.
const saveProductInCart = async(req, res) => {
    try {
        const { idCarrito, idProducto } = req.params;
    
        const producto = await obtenerProductoPorId(idProducto);

        if(!producto){
            res.status(400).json({ error: 'El producto no existe.'})
        }
    
        await guardarProductoEnCarrito(idCarrito, producto)
        
        res.status(200).json({ msj: `Producto con ID:${idProducto} se agregó con éxito al carrito.`})

    } catch (error) {
        logWarn.error(error)
    }
}    

// ______________________________________________________________________________________________________
// Controlador para eliminar un carrito.
const deleteCart = async(req, res) => {
    try {
        const { idCarrito } = req.params;
    
        await eliminarCarritoPorId(idCarrito);

        res.status(200).json({ msj: `Carrito con ID:${idCarrito} eliminado con éxito.`})
        
    } catch (error) {
        logWarn.error(error);
    }


}


// ______________________________________________________________________________________________________
// Controlador para finalizar la compra de un carrito.
const finalizarCompra = async(req, res) => {
    try {
        const { idCarrito } = req.params;
        const { user } = req.session;
    
        const carrito = await obtenerCarritoPorId(idCarrito);
    
        const nuevaOrden = {
            buyer: user,
            order: carrito.productos
        }
    
        await ordenesDao.save(nuevaOrden);
    
        const mailOptions = {
            from: 'Ecommerce-c32125',
            to: user.username,
            subject: `Nuevo pedido de ${user.nombre}`,
            html: crearHtmlMail(carrito.productos)
        }
    
        await transport.sendMail(mailOptions);
        
        res.status(200).json({ msj: 'Compra finalizada con éxito.'})

    } catch (error) {
        logWarn.error(error)
    }
}

export { createCart, getCartById, getProductsInCart, saveProductInCart, deleteCart, finalizarCompra }