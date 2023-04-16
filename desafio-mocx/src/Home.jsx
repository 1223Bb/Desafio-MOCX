import React from "react";
import Form from "./Form";
import axios from "axios";
import { Link } from "react-router-dom";

const URL = "http://localhost:5000/pessoas";

function Home() {
  function CreateEntry(nome, cpf, ddn) {
    // if (props.id == null) {
    console.log(
      "Vamos criar uma nova entrada, com nome :" + nome + " e cpf " + cpf
    );
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
          props.setPessoas([...props.pessoas, pessoa]);
        }
      })
      .catch((err) => alert(err.response.data));
    // } else {
    //   console.log(
    //     "Vamos atualizar uma entrada, com nome :" + nome + " e cpf " + cpf
    //   );
    //   axios
    //     .post(URL + "/" + props.id, {
    //       nome: nome,
    //       cpf: cpf,
    //       datadenascimento: ddn,
    //     })
    //     .then((res) => console.log(res))
    //     .catch((err) => alert(err.response.data));
    // }
  }
  return (
    <>
      <h1>Cadastro de Pessoas</h1>
      <Form submitFunc={CreateEntry} />
      <Link to="lista">
        <button>Lista de Pessoas</button>
      </Link>
    </>
  );
}

export default Home;
