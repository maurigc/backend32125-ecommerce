import ContenedorMongodb from "../../Containers/container.mongodb.js";
import { productSchema } from "../../Models/producto.model.js";



class ProductosMongoDb extends ContenedorMongodb{
    constructor(){
        super('productos', productSchema);
    }
}



export default ProductosMongoDb;