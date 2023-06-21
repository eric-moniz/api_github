import React from "react";
import PropTypes from "prop-types";

import { Container, Name, Description, Footer, Lang, Link } from "./styles";
// import { getLangsFrom } from "../../../../services/api";

function Repository({ repository }) {
  return (
    <Container color="">
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>

      <Footer color="">
        <Lang>{repository.language}</Lang>
        <Link href={repository.hmtl_url} target="_blank">
          Ver
        </Link>
      </Footer>
    </Container>
  );
}

Repository.propTypes = {
  repository: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      hmtl_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default Repository;
