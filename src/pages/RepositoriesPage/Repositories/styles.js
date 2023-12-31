import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.xxl}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: auto;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
