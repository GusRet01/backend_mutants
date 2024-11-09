const mongoose = require('mongoose');
require('dotenv').config(); 

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB conectado');
    } catch (err) {
        console.error('Error de conexión:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
