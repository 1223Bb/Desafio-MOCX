const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pessoaSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },

  cpf: {
    type: String,
    required: true,
  },

  datadenascimento: {
    type: Date,
    required: true,
  },
});

const Pessoa = mongoose.model("Pessoa", pessoaSchema);

module.exports = Pessoa;
