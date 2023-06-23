import React, { useState, useEffect } from "react";

import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories/index";
import { getUser, getLangsFrom } from "../../services/api";

import { Loading, Container, Sidebar, Main } from "./styles";

export default function RepositoriesPage() {
  const [user, setUser] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  // controlar a tela loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse] = await Promise.all([getUser("eric-moniz")]);
      setUser(userResponse.data);

      setLoading(false);
    };

    loadData();
  }, []);

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

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

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
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
}
