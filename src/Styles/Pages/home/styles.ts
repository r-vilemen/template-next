import styled from "styled-components";

export const Container = styled.div`
  /* exemplos: */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
`;
