import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Form from "./Form";
import axios from "axios";

function UpdateEntry(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  function OnSubmit(nome, cpf, ddn) {
    // console.log("Update Entry ID: " + id);
    // console.log("Update Entry pessoas: " + props.pessoas);
    console.log("Update Entry setPessoas: " + props.setPessoas);
    let pessoaAtualizada = {
      nome: nome,
      cpf: cpf,
      datadenascimento: ddn,
    };
    axios
      .post("http://localhost:5000/pessoas/" + id, {
        nome: nome,
        cpf: cpf,
        datadenascimento: ddn,
      })
      .then((res) => {
        // console.log("Status: " + (res.status == 200));
        if (res.status == 200) {
          // console.log("Chegamos no UpdateEntry, res status 200");
          props.setPessoas((prevPessoas) => {
            return prevPessoas.map((pessoa) => {
              if (pessoa._id === id) {
                return { ...pessoa, ...pessoaAtualizada };
              } else {
                return pessoa;
              }
            });
          });
          navigate("..");
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data);
      });

    //
    // let pessoaAtualizada = {
    //   nome: nome,
    //   cpf: cpf,
    //   datadenascimento: ddn,
    // };
    // axios.post(URL + "/" + id, pessoaAtualizada).then(
    //   setPessoas(
    //     pessoas.map((pessoa) => {
    //       if (pessoa._id === id) {
    //         return { ...pessoa, pessoaAtualizada };
    //       } else {
    //         return pessoa;
    //       }
    //     })
    //   )
    // );
  }

  return (
    <>
      <h1>Aqui estaremos atualizando o cadastro da pessoa com id {id}</h1>
      <Form id={id} submitFunc={OnSubmit} />
      <Link to="..">
        <button>Fechar</button>
      </Link>
    </>
  );
}

export default UpdateEntry;
