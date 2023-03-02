let productosDao
let usuariosDao
let carritoDao
let ordenesDao

switch ('mongodb') {
    case 'mongodb':
        const { default: ProductosMongoDb } = await import('../DAOs/daoMongoDb/producto.dao.mongodb.js');        
        const { default: UsuariosMongoDb } = await import('../DAOs/daoMongoDb/usuario.dao.mongodb.js');
        const { default: CarritoMongoDb } = await import('../DAOs/daoMongoDb/carrito.dao.mongodb.js');
        const { default: OrdenMongoDb } = await import('../DAOs/daoMongoDb/ordenes.dao.mongodb.js');

        productosDao = new ProductosMongoDb();
        usuariosDao = new UsuariosMongoDb();
        carritoDao = new CarritoMongoDb();
        ordenesDao = new OrdenMongoDb();

        break;

}



export { productosDao, usuariosDao, carritoDao, ordenesDao };