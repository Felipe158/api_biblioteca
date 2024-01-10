const mongoose = require('mongoose');

// mongodb://localhost:27017/biblioteca
mongoose.connect("mongodb://root:example@localhost:27017/Biblioteca?authSource=admin&authMechanism=SCRAM-SHA-256", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const LibroSchema = new mongoose.Schema({
    titulo: String,
    autor: String
}, { collection: 'Libros' });

const Libro = mongoose.model('Libro', LibroSchema);

module.exports = Libro;