import ProductoDto from "../DTOs/productos.dto.js";
import { productosDao } from "../DAOs/factory.js";

class RepositorioProductos{
    constructor(){

    }


    // ______________________________________________________________________________________________________
    async getAll(){
        const productos = await productosDao.getAll();
        
        const productosDto = productos.map( producto => {
            return new ProductoDto(producto);
        })

        return productosDto;
    }

    // ______________________________________________________________________________________________________
    async getById(idProducto){
        const producto = await productosDao.getById(idProducto);

        return new ProductoDto(producto);
    }

    // ______________________________________________________________________________________________________
    async save(nuevoProducto){
        const productoDto = new ProductoDto(nuevoProducto);

        await productosDao.save(productoDto);

        return productoDto;
    }

    // ______________________________________________________________________________________________________
    async update(idProducto, nuevoProducto){
        const productoDto = new ProductoDto(nuevoProducto);

        await productosDao.update(idProducto, productoDto);
    }

    // ______________________________________________________________________________________________________
    async deleteById(idProducto){
        await productosDao.deleteById(idProducto);
    }
}



export default RepositorioProductos;