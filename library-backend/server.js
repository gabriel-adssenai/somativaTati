const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path');

const app = express();
app.use(cors({
    origin: 'http://localhost:8080', // Substitua com a URL correta do seu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Adicione os métodos que você está utilizando
  }));

app.use(express.json());

// Servir arquivos estáticos da pasta 'uploads' (para acessar as imagens via URL)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Conexão ao MongoDB
mongoose
  .connect(
    "mongodb+srv://aluno:YO2vKq9AZ2ecUs5D@cluster0.gcd7h.mongodb.net/library" 
  )
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.error("Erro ao conectar ao MongoDB:", err));

// Importação das rotas
const booksRoutes = require("./routes/books");
app.use("/api/books", booksRoutes);

// Definir a porta do servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
