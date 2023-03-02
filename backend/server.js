import { app } from './app.js';
import { logConsola } from './Scripts/loggers.js';


const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    logConsola.info(`El servidor esta funcionando en el puerto: ${PORT}`);

    if(error){
        logConsola.warn(error);
    }
})