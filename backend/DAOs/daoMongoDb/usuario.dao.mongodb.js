import ContenedorMongodb from "../../Containers/container.mongodb.js";
import { userSchema } from "../../Models/usuario.model.js";


class UsuariosMongoDb extends ContenedorMongodb{
    constructor(){
        super('usuarios', userSchema);
    }
}




export default UsuariosMongoDb;