import ContenedorMongodb from "../../Containers/container.mongodb.js";
import { orderSchema } from "../../Models/orden.model.js";


class OrdenMongoDb extends ContenedorMongodb{
    constructor(){
        super('ordenes', orderSchema);
    }
}



export default OrdenMongoDb;