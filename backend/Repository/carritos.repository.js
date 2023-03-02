import CarritosDto from "../DTOs/carritos.dto.js";
import { carritoDao } from '../DAOs/factory.js';
import ProductoDto from "../DTOs/productos.dto.js";


class RepositorioCarritos{
    constructor(){

    }

    // ______________________________________________________________________________________________________
    async getById(idCarrito){
        const carrito = await carritoDao.getById(idCarrito);
        
        return new CarritosDto(carrito);
    }

    // ______________________________________________________________________________________________________
    async save(){
        await carritoDao.save();
    }

    // ______________________________________________________________________________________________________
    async saveInCart(idCarrito, nuevoProducto){
        const productoDto = new ProductoDto(nuevoProducto);

        await carritoDao.saveInCart(idCarrito, productoDto);
    }

    // ______________________________________________________________________________________________________
    async deleteById(idCarrito){
        await carritoDao.deleteById(idCarrito);
    }

}



export default RepositorioCarritos;