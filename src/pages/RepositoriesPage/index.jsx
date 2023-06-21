import React, { useState } from "react";

import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories/index";
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
      id: "1",
      name: "Repo 1",
      description: "Descrição",
      hmtl_url: "https://devsamurai.com.br",
      language: "JavaScript",
    },
    {
      id: "2",
      name: "Repo 2",
      description: "Descrição",
      hmtl_url: "https://devsamurai.com.br",
      language: "JavaScript",
    },
    {
      id: "3",
      name: "Repo 3",
      description: "Descrição",
      hmtl_url: "https://devsamurai.com.br",
      language: "PHP",
    },
    {
      id: "4",
      name: "Repo 4",
      description: "Descrição",
      hmtl_url: "https://devsamurai.com.br",
      language: "Ruby",
    },
    {
      id: "5",
      name: "Repo 5",
      description: "Descrição",
      hmtl_url: "https://devsamurai.com.br",
      language: "CSS",
    },
    {
      id: "6",
      name: "Repo 6",
      description: "Descrição",
      hmtl_url: "https://devsamurai.com.br",
      language: "TypeScript",
    },
  ];

  const languages = getLangsFrom(repositories);
  const [currentLanguage, setCurrentLanguage] = useState();

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>

      <Main>
        <Repositories repositories={repositories} />
      </Main>
    </Container>
  );
}
