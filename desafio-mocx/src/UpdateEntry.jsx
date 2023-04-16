import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Form from "./Form";
import axios from "axios";
import styles from "./UpdateEntry.module.css";

function UpdateEntry(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  let pessoaSelecionada = {};
  getPessoa();

  function OnSubmit(nome, cpf, ddn) {
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
        if (res.status == 200) {
          props.setPessoas((prevPessoas) => {
            return prevPessoas.map((pessoa) => {
              if (pessoa._id === id) {
                return { ...pessoa, ...pessoaAtualizada };
              } else {
                return pessoa;
              }
            });
          });
          alert(res.data);
          navigate("..");
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data);
      });
  }

  function getPessoa() {
    props.pessoas.map((pessoa) => {
      if (pessoa._id === id) {
        pessoaSelecionada = pessoa;
      }
    });
  }

  return (
    <>
      <div className={styles.container}>
        {console.log(pessoaSelecionada)}
        <Form
          id={id}
          submitFunc={OnSubmit}
          nome={pessoaSelecionada.nome}
          cpf={pessoaSelecionada.cpf}
          ddn={pessoaSelecionada.datadenascimento}
        />
      </div>
      <Link to="..">
        <div className={styles.backdrop} />
      </Link>
    </>
  );
}

export default UpdateEntry;
