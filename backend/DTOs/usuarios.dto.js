class UsuarioDto{
    constructor(usuario){
        this._id = usuario._id,
        this.username = usuario.username,
        this.password = usuario.password,
        this.nombre = usuario.nombre,
        this.direccion = usuario.direccion,
        this.edad = usuario.edad,
        this.telefono = usuario.telefono,
        this.avatar = usuario.avatar
    }
}


export default UsuarioDto;