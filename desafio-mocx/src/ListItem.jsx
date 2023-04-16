import React from "react";
import { Link } from "react-router-dom";
import styles from "./ListItem.module.css";
function ListItem(props) {
  let data = new Date(props.ddn);

  function handleDelete() {
    props.deleteFunc();
  }

  console.log("ListItem console log");
  console.log(props.updateFunc);

  return (
    <li className={styles.container}>
      <p>Nome: {props.nome}</p>
      <p>CPF: {props.cpf}</p>
      <p>
        Data de nascimento:{" "}
        {data.toLocaleDateString("pt-BR", { timeZone: "UTC" })}
      </p>
      <button onClick={handleDelete}>Deletar</button>
      <Link to={props.id}>
        <button>Editar</button>
      </Link>
    </li>
  );
}

export default ListItem;
