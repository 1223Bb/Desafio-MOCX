//Declaração de pacotes necessários
const express = require("express");
const cors = require("cors");

//Configuração do ambiente sendo pega por arquivo
require("dotenv").config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log("O backend está rodando na porta " + port + ".");
});
