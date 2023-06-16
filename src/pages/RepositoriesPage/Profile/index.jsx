import React from "react";

import { Container, Header, Avatar, Login, Name } from "./styles";

export default function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/98990048?v=4" />
      </Header>
      <Login>eric-moniz</Login>
      <Name>Eric Moniz</Name>
    </Container>
  );
}
