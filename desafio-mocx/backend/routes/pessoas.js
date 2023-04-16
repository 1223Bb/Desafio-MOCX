const router = require("express").Router();
let Pessoa = require("../models/pessoa.model");

function validarCPF(cpf) {
  let primeiro = 0;
  let segundo = 0;
  console.log(cpf);
  for (i = 0; i < 9; i++) {
    primeiro += cpf[i] * (10 - i);
  }
  if (primeiro % 11 <= 1) {
    primeiro = 0;
  } else {
    primeiro = 11 - (primeiro % 11);
  }

  console.log("O primeiro digito deve ser: " + primeiro);
  console.log("O primeiro digito é " + cpf[9]);

  if (primeiro != cpf[9]) {
    console.log("Operação inválida: Primeiro dígito está errado.");
    return false;
  }

  for (i = 1; i < 10; i++) {
    segundo += cpf[i] * (10 - (i - 1));
  }
  if (segundo % 11 <= 1) {
    segundo = 0;
  } else {
    segundo = 11 - (segundo % 11);
  }

  console.log("O segundo digito deve ser: " + segundo);
  console.log("O segundo digito é " + cpf[10]);

  if (segundo != cpf[10]) {
    console.log("Operação inválida: Segundo dígito está errado.");
    return false;
  }

  return true;
}

//Pegar todos os resultados da coleção Pessoas.
router.route("/").get((req, res) => {
  Pessoa.find()
    .then((pessoas) => res.json(pessoas))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Cadastrar uma pessoa.
router.route("/").post((req, res) => {
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const datadenascimento = Date.parse(req.body.datadenascimento);

  const newPessoa = new Pessoa({
    nome,
    cpf,
    datadenascimento,
  });

  if (validarCPF(cpf)) {
    newPessoa
      .save()
      .then(() => res.json("Pessoa cadastrada!"))
      .catch((err) => {
        // console.log(err);
        if (err.code == 11000) {
          res.status(400).json("Error: CPF já existe no sistema.");
        } else {
          res.status(400).json("Error: " + err);
        }
      });
  } else {
    res.status(400).json("Error: CPF inválido.");
  }
});

//Atualizar pessoa com o id enviado.
router.route("/:id").post((req, res) => {
  if (validarCPF(req.body.cpf)) {
    Pessoa.findById(req.params.id)
      .then((pessoa) => {
        pessoa.nome = req.body.nome;
        pessoa.cpf = req.body.cpf;
        pessoa.datadenascimento = Date.parse(req.body.datadenascimento);
        pessoa
          .save()
          .then(() => res.json("Cadastro atualizado!"))
          .catch((err) => {
            if (err.code == 11000) {
              res.status(400).json("Error: CPF já existe no sistema.");
            } else {
              res.status(400).json("Error: " + err);
            }
          });
      })
      .catch((err) => res.status(400).json("Error " + err));
  } else {
    res.status(400).json("Error: CPF inválido.");
  }
});

//Deletar pessoa com id.
router.route("/:id").delete((req, res) => {
  Pessoa.findByIdAndDelete(req.params.id)
    .then(() => res.json("Pessoa com id " + req.params.id + " excluída."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
