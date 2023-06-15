import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

import { Button, Container, Form, Input, Logo, Title } from "./styles";

import githubLogo from "../../assets/images/github-logo.svg";

function MainPage() {
  const [login, setLogin] = useState("");

  return (
    <Container>
      <Logo src={githubLogo} alt="github logo" />
      <Title>API Github</Title>
      <Form>
        <Input
          placeholder="usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button>
          <MdSearch size={42} fill="#fff" />
        </Button>
      </Form>
    </Container>
  );
}

export default MainPage;
