import mongoose from "mongoose";
import { config } from "../config.js";
import { logError, logConsola, logWarn } from '../Scripts/loggers.js';



class ContenedorMongodb {
    constructor(coleccion, schema){
        this.connectDb();
        this.coleccion = mongoose.model(coleccion, schema);
    }

    connectDb = async() => {
        try {
            await mongoose.connect(config.mongoDb.url, config.mongoDb.options);

            logConsola.info("Base de datos conectada.");
        } catch (error) {
            logError.error(error);
        }
        
    }

    //_____________________________________________________________
    //Guardar un item.
    async save(item) {
        try {
            const newItem = new this.coleccion(item);

            await newItem.save();
        } catch (error) {
            logError.error(error);
        }
        
    }
    //_____________________________________________________________
    //Obtener todos los items.
    async getAll() {
        try {

            return await this.coleccion.find();
        } catch (error) {
            logError.error(error);
        }
        
    }
    //_____________________________________________________________
    //Obtener un item por su id.
    async getById(idItem) {
        try {
            const item = await this.coleccion.find({_id: {$eq: idItem}});
            
            return item[0] 
    
        } catch (error) {
            logError.error(error);
        }
    }
    //_____________________________________________________________
    //Actualizar algun item ya guardado.
    async update(idItem, newItem){
        try {
            await this.coleccion.updateOne({_id: {$eq: idItem}}, {$set: newItem});

        } catch (error) {
            logError.error(error);
        }
    }  
    //_____________________________________________________________
    //Eliminar un item por su id.
    async deleteById(idItem) {
        try {
            // await this.coleccion.deleteOne({_id: {$eq: idItem}});
            const item = await this.coleccion.find({_id: {$eq: idItem}});
            
            item[0].isDeleted = true;

            await this.coleccion.updateOne({_id: {$eq: idItem}}, {$set: item[0]});
            
        } catch (error) {
            logError.error(error);
        }
        
    }
}


export default ContenedorMongodb;