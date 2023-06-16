import React from "react";
import Profile from "./Profile";

import { Container, Sidebar, Main } from "./styles";

export default function RepositoriesPage() {
  return (
    <Container>
      <Sidebar>
        <Profile />
      </Sidebar>

      <Main>Main</Main>
    </Container>
  );
}
