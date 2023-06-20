import React from "react";

import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";
import { getLangsFrom } from "../../services/api";

import { Container, Sidebar, Main } from "./styles";

export default function RepositoriesPage() {
  const user = {
    name: "Dev Samurai",
    login: "DevSamurai",
    avatar_url: "https://avatars.githubusercontent.com/u/55540536?v=4",
    followers: 120,
    following: 16,
    company: null,
    blog: "https://devsamurai.com.br",
    location: "São José dos Campos - SP",
  };

  const repositories = [
    {
      name: "Repo 1",
      description: "Descrição",
      hmtl_url: "https://devsamurai.com.br",
      language: "JavaScript",
    },
    {
      name: "Repo 2",
      description: "Descrição",
      hmtl_url: "https://devsamurai.com.br",
      language: "JavaScript",
    },
    {
      name: "Repo 3",
      description: "Descrição",
      hmtl_url: "https://devsamurai.com.br",
      language: "PHP",
    },
    {
      name: "Repo 4",
      description: "Descrição",
      hmtl_url: "https://devsamurai.com.br",
      language: "Ruby",
    },
    {
      name: "Repo 5",
      description: "Descrição",
      hmtl_url: "https://devsamurai.com.br",
      language: "CSS",
    },
    {
      name: "Repo 6",
      description: "Descrição",
      hmtl_url: "https://devsamurai.com.br",
      language: "TypeScript",
    },
  ];

  const languages = getLangsFrom(repositories);

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>

      <Main>
        <Repositories />
      </Main>
    </Container>
  );
}
