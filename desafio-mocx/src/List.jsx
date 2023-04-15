import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import Form from "./Form";
import axios from "axios";

const URL = "http://localhost:5000/pessoas";

function List() {
  const [pessoas, setPessoas] = useState([]);

  function FetchPeople() {
    console.log("Fetching...");
    axios.get(URL).then((response) => {
      setPessoas(response.data);
    });
  }

  function DeleteEntry(id) {
    console.log("Vamos deletar o " + id);
    axios
      .delete(URL + "/" + id)
      .then(setPessoas(pessoas.filter((pessoa) => pessoa._id !== id)))
      .catch((err) => alert(err));
  }

  function UpdateEntry(id) {}

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
          setPessoas([...pessoas, pessoa]);
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

  useEffect(() => {
    FetchPeople();
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
            id={pessoa._id}
            deleteFunc={() => DeleteEntry(pessoa._id)}
            updateRedir={() => UpdateEntry(pessoa._id)}
          />
        ))}
      </ul>
      <h1>Cadastrar pessoa</h1>
      <Form submitFunc={CreateEntry} />
    </>
  );
}

export default List;
