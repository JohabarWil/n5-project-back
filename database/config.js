const mongoose = require('mongoose');
/**
 * Configuración y conexión a la Base de datos
 * @returns {Promise<void>}
 */
const dbConnection = async () => {
    try {
       await mongoose.connect(process.env.CNN_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
       console.log('conectado a BD');
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar bd');
    }
}

module.exports = {
    dbConnection
}