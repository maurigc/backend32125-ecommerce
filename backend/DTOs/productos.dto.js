class ProductoDto{
    constructor(producto){
        this._id = producto._id
        this.nombre = producto.nombre,
        this.descripcion = producto.descripcion,
        this.codigo = producto.codigo,
        this.urlImagen = producto.urlImagen,
        this.stock = producto.stock,
        this.precio = producto.precio,
        this.timestamp = producto.timestamp,
        this.isDeleted = producto.isDeleted
    }
}


export default ProductoDto;