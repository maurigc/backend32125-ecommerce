import RepositorioUsuario from "../Repository/usuarios.repository.js";


const repoUsuario = new RepositorioUsuario();


// ______________________________________________________________________________________________________
// Servicio para obtener todos los usuarios.
const obtenerUsuarios = async() => {
    const usuarios = await repoUsuario.getAll();

    return usuarios;
}


// ______________________________________________________________________________________________________
// Servicio para guardar un usuario nuevo.
const guardarUsuario = async(newUser) => {
    await repoUsuario.save(newUser);
}



export { obtenerUsuarios, guardarUsuario };