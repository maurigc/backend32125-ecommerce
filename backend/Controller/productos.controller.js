import { logWarn } from "../Scripts/loggers.js";
import { obtenerProductos, obtenerProductoPorId, guardarProducto, actualizarProducto, eliminarProducto } from "../Service/productos.service.js";



// ______________________________________________________________________________________________________
// Controlador para obtener todos los productos.
const getProducto = async(req, res) => {
    try {
        const productos = await obtenerProductos();

        const productosAEnviar = productos.filter( p => p.isDeleted === false);

        res.status(200).json(productosAEnviar);
        
    } catch (error) {
        logWarn.error(error);
    }
}


// ______________________________________________________________________________________________________
// Controlador para obtener un producto por su ID.
const getProductoById = async(req, res) => {
    try {
        const { idProducto } = req.params;
    
        const producto = await obtenerProductoPorId(idProducto);

        if(!producto || producto.isDeleted === true){
            res.status(400).json({ error: 'El producto no existe.'});
        }else{
            res.status(200).json(producto);
        }
        
    } catch (error) {
        logWarn.error(error);
    }

}


// ______________________________________________________________________________________________________
// Controlador para guardar un producto.
const saveProducto = async(req, res) => {
    try {
        const nuevoProducto = req.body;
    
        await guardarProducto(nuevoProducto);

        res.status(200).json({ msj: 'Producto agregado con éxito.' })
        
    } catch (error) {
        logWarn.error(error);
    }
}


// ______________________________________________________________________________________________________
// Controlador para actualizar un producto.
const updateProducto = async (req, res) => {
    try {
        const { idProducto } = req.params;
        const nuevoProducto = req.body;
    
        const producto = await obtenerProductoPorId(idProducto);

        if(producto){
            await actualizarProducto(idProducto, nuevoProducto)

            res.status(200).json({ msj: 'Producto actualizado con éxito.'})
        }else{
            res.status(400).json({ error: 'No existe el producto que se intenta actualizar.'})
        }
        
    } catch (error) {
        logWarn.error(error);
    }

}


// ______________________________________________________________________________________________________
// Controlador para eliminar un producto.
const deleteProducto = async(req, res) => {
    try {
        const { idProducto } = req.params;

        await eliminarProducto(idProducto);

        res.status(200).json('Productos eliminado con éxito.');

    } catch (error) {
        logWarn.error(error);
    }
}


export { getProducto, getProductoById, saveProducto, updateProducto, deleteProducto }