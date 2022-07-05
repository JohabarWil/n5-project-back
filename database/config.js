const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
       await mongoose.connect('mongodb+srv://JohabarDbAtlas:JohabarBdMongoProjects@charactersdb.cupdyny.mongodb.net/projects_front', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
       console.log('conectado abd');
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar bd');
    }
}

module.exports = {
    dbConnection
}