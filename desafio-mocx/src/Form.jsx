import React, { useState } from "react";

function Form() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataDeNascimento, setDataDeNascimento] = useState("");

  return (
    <form onSubmit={OnSubmit}>
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
