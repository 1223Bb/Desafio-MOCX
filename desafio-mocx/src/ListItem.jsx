import React from "react";

function ListItem(props) {
  let data = new Date(props.ddn);

  function handleDelete() {
    props.deleteFunc();
  }
  return (
    <li>
      <p>Nome: {props.nome}</p>
      <p>CPF: {props.cpf}</p>
      <p>Data de nascimento: {data.toLocaleDateString()}</p>
      <button onClick={handleDelete}>Deletar</button>
      <button>Editar</button>
    </li>
  );
}

export default ListItem;
