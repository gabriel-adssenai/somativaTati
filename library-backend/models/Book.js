const mongoose = require('mongoose');

// Definindo o esquema do livro
const BookSchema = new mongoose.Schema({
     title: { type: String, required: true},
     author: { type: String, required: true},
     year: { type:Number },
     image: { type: String }, // URL da imagem da capa
});

//Exportando o modelo
module.exports = mongoose.model('Book', BookSchema);