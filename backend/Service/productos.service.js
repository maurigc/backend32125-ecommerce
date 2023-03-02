import RepositorioProductos from "../Repository/productos.repository.js";


const repoProductos = new RepositorioProductos();

// ______________________________________________________________________________________________________
// Service para obtener todos los productos.
const obtenerProductos = async() => {
    const productos = await repoProductos.getAll();

    return productos;
}


// ______________________________________________________________________________________________________
// Service para obtener un producto por su ID.
const obtenerProductoPorId = async(idProducto) => {
    const producto = await repoProductos.getById(idProducto);

    return producto;
}


// ______________________________________________________________________________________________________
// Service para guardar un producto nuevo.
const guardarProducto = async(nuevoProducto) => {
    await repoProductos.save(nuevoProducto);
}


// ______________________________________________________________________________________________________
// Service para actualizar un producto.
const actualizarProducto = async(idProducto, nuevoProducto) => {
    await repoProductos.update(idProducto, nuevoProducto);
}

// ______________________________________________________________________________________________________
// Service para eliminar un producto.
const eliminarProducto = async(idProducto) => {
    await repoProductos.deleteById(idProducto);
}



export { obtenerProductos, obtenerProductoPorId, guardarProducto, actualizarProducto, eliminarProducto }