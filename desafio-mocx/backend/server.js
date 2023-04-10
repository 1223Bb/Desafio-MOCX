//Declaração de pacotes necessários
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//Configuração do ambiente sendo pega por arquivo
require("dotenv").config();

const app = express();
const port = process.env.port || 5000;

//Conexão com o banco de dados usando mongoose

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  //   useCreateIndex: true,
  useUnifiedTopology: true,
  //   serverApi: ServerApiVersion.v1,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Conexão com o MongoDB bem sucedida.");
});

app.listen(port, () => {
  console.log("O backend está rodando na porta " + port + ".");
});
