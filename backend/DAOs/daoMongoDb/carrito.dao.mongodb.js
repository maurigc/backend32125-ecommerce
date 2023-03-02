import ContenedorMongodb from "../../Containers/container.mongodb.js";
import { cartSchema } from "../../Models/carrito.model.js";
import { logError } from "../../Scripts/loggers.js";



class CarritoMongoDb extends ContenedorMongodb{
    constructor(){
        super('carritos', cartSchema);
    }

    //_____________________________________________________________
    //Guardar un producto en un determinado carrito.
    async saveInCart(idCarrito, producto){
        try {
            const carrito = await super.getById(idCarrito);
            
            carrito.productos = [...carrito.productos, {...producto}]
            
            await super.update(idCarrito, carrito);
            
            
        } catch (error) {
            logError.error(error);
        }
    }
}



export default CarritoMongoDb;