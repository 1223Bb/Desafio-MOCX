import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "./Form";
import axios from "axios";

function UpdateEntry() {
  const { id } = useParams();
  const navigate = useNavigate();
  function OnSubmit(nome, cpf, ddn) {
    console.log(id);
    axios
      .post("http://localhost:5000/pessoas/" + id, {
        nome: nome,
        cpf: cpf,
        datadenascimento: ddn,
      })
      .then((res) => {
        // console.log("Status: " + (res.status == 200));
        if (res.status == 200) {
          navigate("/");
        }
      })
      .catch((err) => alert(err.response.data));
  }

  return (
    <>
      <h1>Aqui estaremos atualizando o cadastro da pessoa com id {id}</h1>
      <Form id={id} submitFunc={OnSubmit} />
    </>
  );
}

export default UpdateEntry;
