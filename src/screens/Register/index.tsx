import React from "react";
import { Container, Header, Title, Form, Fields } from "./styles";
import { Input } from "../../componentes/Forms/Input";
import { Button } from "../../componentes/Forms/Button";

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="nome" />
          <Input placeholder="Preço" />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
