import styled from "styled-components";
import { GridContainer, NestedContainer } from '../../globalStyles';

export const ServicesContainer = styled(GridContainer)``;

export const TitleContainer = styled(NestedContainer)`
  display: flex;
  align-items: center;
  padding: 0 100px;
`;

export const ListContainer = styled(GridContainer)``;

export const HeadingContainer = styled(NestedContainer)`
  text-align: center;
`;

export const Heading = styled.h4`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 20px auto;
  text-decoration: underline purple;
  color: purple;
`;

export const HeadingText = styled.p`
  width: 52%;
  text-align: center;
  margin: auto;
`;

export const Service = styled.div`
  margin: 20px 40px;
  text-align: center;
  background-color: rgba(195, 247, 244, .5);
`;