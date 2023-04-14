import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import Form from "./Form";
import axios from "axios";

const getURL = "http://localhost:5000/pessoas";

function OnDeleteEntry(id) {
  console.log("Vamos deletar o " + id);
  // axios.delete()
}

function List() {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    axios.get(getURL).then((response) => {
      setPessoas(response.data);
    });
  }, []);

  return (
    <>
      <h2>Pessoas cadastradas</h2>
      <ul>
        {pessoas.map((pessoa) => (
          <ListItem
            key={pessoa._id}
            nome={pessoa.nome}
            cpf={pessoa.cpf}
            ddn={pessoa.datadenascimento}
            deleteFunc={() => OnDeleteEntry(pessoa._id)}
          />
        ))}
      </ul>
      <Form />
    </>
  );
}

export default List;
