import styled from "styled-components";
import { GridContainer, NestedContainer } from "../../globalStyles";

export const Container = styled(GridContainer)``;

export const TitleContainer = styled(NestedContainer)``;

export const Title = styled.h1`
  margin: 0;
`;

export const Heading = styled.h3`
  margin: 0;
  text-decoration: underline orange;
`

export const FAQContainer = styled(NestedContainer)`
  padding: 10px;
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 10px;
`;
export const ListItem = styled.li`
  padding: 5px 0;
`;

export const BtnBox = styled(NestedContainer)``;