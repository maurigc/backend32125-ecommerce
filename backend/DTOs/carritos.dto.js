class CarritosDto{
    constructor(carrito){
        this.timestamp = carrito.timestamp,
        this.productos = carrito.productos,
        this.isDeleted = carrito.isDeleted
    }
}



export default CarritosDto;