import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";

function Form(props) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataDeNascimento, setDataDeNascimento] = useState("");

  function OnSubmit(nome, cpf, ddn) {
    props.submitFunc(nome, cpf, ddn);
  }

  function handleSubmit() {
    event.preventDefault();
    OnSubmit(nome, cpf, dataDeNascimento);
  }

  useEffect(() => {
    setNome(props.nome);
    setCpf(props.cpf);
    setDataDeNascimento(props.ddn);
  }, []);

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <label htmlFor="nome">Nome:</label>
      <input
        id="nome"
        type="text"
        required
        placeholder="Insira o nome..."
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      {!props.atualizando && (
        <>
          <label htmlFor="cpf">CPF:</label>
          <input
            id="cpf"
            type="text"
            required
            placeholder="Insira um CPF válido..."
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
          />
        </>
      )}
      <label htmlFor="data">Data de Nascimento:</label>
      <input
        id="data"
        type="date"
        required
        value={
          dataDeNascimento != null ? dataDeNascimento.substring(0, 10) : null
        }
        onChange={(event) => setDataDeNascimento(event.target.value)}
      />
      <input type="submit" value="OK" />
    </form>
  );
}

export default Form;
