import React from "react";
import { Link } from "react-router-dom";

function ListItem(props) {
  let data = new Date(props.ddn);

  function handleDelete() {
    props.deleteFunc();
  }
  return (
    <li>
      <p>Nome: {props.nome}</p>
      <p>CPF: {props.cpf}</p>
      <p>
        Data de nascimento:{" "}
        {data.toLocaleDateString("pt-BR", { timeZone: "UTC" })}
      </p>
      <button onClick={handleDelete}>Deletar</button>
      <Link to={"/" + props.id}>
        <button>Editar</button>
      </Link>
    </li>
  );
}

export default ListItem;
