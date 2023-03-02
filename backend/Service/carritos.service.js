import RepositorioCarritos from "../Repository/carritos.repository.js";


const repoCarritos = new RepositorioCarritos();

// ______________________________________________________________________________________________________
// Servicio para crear un carrito.
const crearCarrito = async() => {
    await repoCarritos.save();
}


// ______________________________________________________________________________________________________
// Servicio para traer un carrito por su ID.
const obtenerCarritoPorId = async(idCarrito) => {
    const carrito = await repoCarritos.getById(idCarrito);

    return carrito;
}


// ______________________________________________________________________________________________________
// Servicio para traer un carrito por su ID.
const guardarProductoEnCarrito = async(idCarrito, nuevoProducto) => {
    await repoCarritos.saveInCart(idCarrito, nuevoProducto);
}

// ______________________________________________________________________________________________________
// Servicio para eliminar un carrito por su ID.
const eliminarCarritoPorId = async(idCarrito) => {
    await repoCarritos.deleteById(idCarrito);
}



export { crearCarrito, obtenerCarritoPorId, guardarProductoEnCarrito, eliminarCarritoPorId }; 