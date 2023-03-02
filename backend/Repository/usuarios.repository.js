import { usuariosDao } from "../DAOs/factory.js";
import UsuarioDto from "../DTOs/usuarios.dto.js";

class RepositorioUsuario{
    constructor(){

    }

    // ______________________________________________________________________________________________________
    async getAll(){
        const usuarios = await usuariosDao.getAll();

        const usuariosDto = usuarios.map( user => {
            return new UsuarioDto(user)
        })

        return usuariosDto;
    }

    // ______________________________________________________________________________________________________
    async save(newUser){
        const usuarioDto = await new UsuarioDto(newUser);

        await usuariosDao.save(usuarioDto);
    }
}




export default RepositorioUsuario;