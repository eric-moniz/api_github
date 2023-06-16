import React from "react";

import { MdGroup, MdLocationCity, MdWork, MdLink } from "react-icons/md";

import { Container, Header, Avatar, Login, Name, Inner, Data } from "./styles";

export default function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/98990048?v=4" />
      </Header>
      <Login>eric-moniz</Login>
      <Name>Eric Moniz</Name>

      <Inner>
        <Data>
          <MdGroup size={20} />
          30&nbsp;<i>seguidores</i>&nbsp; &middot; 10&nbsp;<i>seguindo</i>
        </Data>
        <Data>
          <MdWork size={20} />
          Dev Samurai
        </Data>
        <Data>
          <MdLocationCity size={20} />
          São Bernardo do Campo
        </Data>
        <Data>
          <MdLink size={20} />
          <a href="https://github.com">link</a>
        </Data>
      </Inner>
    </Container>
  );
}
