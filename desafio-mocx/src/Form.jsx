import React, { useState } from "react";
import { Form as RouterForm } from "react-router-dom";
import axios from "axios";
function Form(props) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataDeNascimento, setDataDeNascimento] = useState("");

  const URL = "http://localhost:5000/pessoas";

  function OnSubmit(nome, cpf, ddn) {
    let content = JSON.stringify({
      nome: nome,
      cpf: cpf,
      datadenascimento: ddn,
    });
    console.log(content);
    axios
      .post(URL, {
        nome: nome,
        cpf: cpf,
        datadenascimento: ddn,
      })
      .then((res) => console.log(res))
      .catch((err) => alert(err.response.data));
    // if (props.id == null) {
    //   console.log(
    //     "Vamos criar uma nova entrada, com nome :" + nome + " e cpf " + cpf
    //   );
    //   axios.post(URL, content).then((res) => console.log(res));
    // } else {
    //   console.log(
    //     "Vamos atualizar uma entrada, com nome :" + nome + " e cpf " + cpf
    //   );
    // }
  }

  function handleSubmit() {
    event.preventDefault();
    console.log("Testing");
    OnSubmit(nome, cpf, dataDeNascimento);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome:</label>
      <input
        id="nome"
        type="text"
        required
        onChange={(event) => setNome(event.target.value)}
      />
      <label htmlFor="cpf">CPF:</label>
      <input
        id="cpf"
        type="text"
        required
        onChange={(event) => setCpf(event.target.value)}
      />
      <label htmlFor="data">Data de Nascimento:</label>
      <input
        id="data"
        type="date"
        required
        onChange={(event) => setDataDeNascimento(event.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default Form;
