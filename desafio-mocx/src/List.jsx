import React, { useEffect } from "react";
import ListItem from "./ListItem";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import styles from "./List.module.css";

const URL = "http://localhost:5000/pessoas";

function List(props) {
  function FetchPeople() {
    axios.get(URL).then((response) => {
      props.setPessoas(response.data);
    });
  }

  function DeleteEntry(id) {
    axios
      .delete(URL + "/" + id)
      .then(
        props.setPessoas(props.pessoas.filter((pessoa) => pessoa._id !== id))
      )
      .then(alert("Deletado com sucesso."))
      .catch((err) => alert(err));
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
