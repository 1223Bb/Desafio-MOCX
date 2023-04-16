import React, { useEffect } from "react";
import ListItem from "./ListItem";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import styles from "./List.module.css";

const URL = "http://localhost:5000/pessoas";

function List(props) {
  function FetchPeople() {
    console.log("Fetching...");
    axios.get(URL).then((response) => {
      props.setPessoas(response.data);
    });
  }

  function DeleteEntry(id) {
    console.log("Vamos deletar o " + id);
    axios
      .delete(URL + "/" + id)
      .then(
        props.setPessoas(props.pessoas.filter((pessoa) => pessoa._id !== id))
      )
      .catch((err) => alert(err));
  }

  function UpdateEntry(id, nome, cpf, ddn) {
    let pessoaAtualizada = {
      nome: nome,
      cpf: cpf,
      datadenascimento: ddn,
    };
    axios.post(URL + "/" + id, pessoaAtualizada).then(
      props.setPessoas(
        props.pessoas.map((pessoa) => {
          if (pessoa._id === id) {
            return { ...pessoa, pessoaAtualizada };
          } else {
            return pessoa;
          }
        })
      )
    );
  }

  useEffect(() => {
    FetchPeople();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Pessoas cadastradas</h2>
      <ul className={styles.list}>
        {props.pessoas.map((pessoa) => (
          <ListItem
            key={pessoa._id}
            nome={pessoa.nome}
            cpf={pessoa.cpf}
            ddn={pessoa.datadenascimento}
            id={pessoa._id}
            deleteFunc={() => DeleteEntry(pessoa._id)}
            updateFunc={UpdateEntry}
          />
        ))}
      </ul>
      <Link to="/">
        <button>Criar uma entrada</button>
      </Link>
      <Outlet />
    </div>
  );
}

export default List;
