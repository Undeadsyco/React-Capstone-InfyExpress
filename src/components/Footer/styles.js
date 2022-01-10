import styled from 'styled-components';

import { Container } from "../../globalStyles";

export const FooterContainer = styled(Container)`
  background: linear-gradient(90deg, rgba(1,193,116,1) 0%, rgba(17,39,161,1) 100%);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  color: white;
`;

export const IconContainer = styled(Container)`
  display: flex;
  width: 25%;
  justify-content: center;
  align-items: center;
`;
