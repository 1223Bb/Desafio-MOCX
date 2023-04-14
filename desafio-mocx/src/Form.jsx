import React, { useState } from "react";
import axios from "axios";

function Form(props) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataDeNascimento, setDataDeNascimento] = useState("");

  const URL = "http://localhost:5000/pessoas";

  function OnSubmit(nome, cpf, ddn) {
    props.submitFunc(nome, cpf, ddn);
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
