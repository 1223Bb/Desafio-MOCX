import React from "react";
import Form from "./Form";
import axios from "axios";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";

const URL = "http://localhost:5000/pessoas";

function Home() {
  function CreateEntry(nome, cpf, ddn) {
    let pessoa = {
      nome: nome,
      cpf: cpf,
      datadenascimento: ddn,
    };
    axios
      .post(URL, pessoa)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          alert(res.data);
          props.setPessoas([...props.pessoas, pessoa]);
        }
      })
      .catch((err) => alert(err.response.data));
  }
  return (
    <div className={styles.container}>
      <h1>Cadastro de Pessoas</h1>
      <Form submitFunc={CreateEntry} />
      <Link to="lista">
        <button>Lista de Pessoas</button>
      </Link>
    </div>
  );
}

export default Home;
