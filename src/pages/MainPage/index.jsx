import React from "react";
import { MdSearch } from "react-icons/md";

import { Button, Container, Form, Input, Logo, Title } from "./styles";

import githubLogo from "../../assets/images/github-logo.svg";

export default function MainPage() {
  return (
    <Container>
      <Logo src={githubLogo} alt="github logo" />
      <Title>API Github</Title>
      <Form>
        <Input placeholder="usuário" />
        <Button>
          <MdSearch size={42} fill="#fff" />
        </Button>
      </Form>
    </Container>
  );
}
