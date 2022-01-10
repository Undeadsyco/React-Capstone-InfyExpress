import styled from "styled-components";
import { GridContainer } from "../../globalStyles";

export const FormContainer = styled(GridContainer)``;

export const Title = styled.h2`
  font-weight: 400;
  text-align: center;
  text-decoration: underline orange;
`;

export const Form = styled.form`
  grid-column: 5/9;
  grid-row: 1/13;
  border: 2px solid rgb(0, 0, 0, .5);
  border-radius: 20px;
  margin: 5px 0;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(7, 1fr);
`;

export const InputContainer = styled.div`
  padding:  5px 10px;
`;

export const Input = styled.input`
  width: 100%;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 50%;
  border-radius: 10px;
`;