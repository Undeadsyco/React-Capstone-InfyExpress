import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from "../../globalStyles";

export const HeaderContainer = styled(Container)`
  background: linear-gradient(90deg, rgba(1,193,116,1) 0%, rgba(17,39,161,1) 100%);
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 0 200px;
`;

export const Title = styled.h2`
  width: 40%;
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link).attrs(() => ({ tabIndex: 0 }))`
  color: white;
  font-style: normal;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    color: rgb(0, 100, 100);
  }
  &:active {}
`;