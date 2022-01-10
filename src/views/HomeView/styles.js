import styled from "styled-components";
import { GridContainer, NestedContainer } from "../../globalStyles";

export const HomeContainer = styled(GridContainer)`
  gap: 10px;
`;

export const InfoContainer = styled(NestedContainer)``;

export const Title = styled.h1`
  margin: 0;
  text-decoration: underline red;
  color: purple;
`;

export const Text = styled.p`
  font-size: .9rem;
`;

export const ImageContainer = styled(NestedContainer)`
  background-color: black;
`;

export const ProcessContainer = styled(GridContainer)`
  gap: 20px;
  padding: 20px 210px 30px;
  background-color: rgb(230, 230, 230);
`;

export const HeadingContainer = styled(NestedContainer)`
  justify-content: center;
  text-align: center;
  text-decoration: underline red;
  color: purple;
`;

export const Process = styled(NestedContainer)`
  background-color: white;
  text-align: center;
`;