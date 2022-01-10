import styled from "styled-components";
import { GridContainer } from "../../globalStyles";

export const LoginContainer = styled(GridContainer)``;

export const Form = styled.form`
  grid-column: 8/11;
  grid-row: 4/10;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(5, 1fr);
  border: 1px solid black;
  border-radius: 20px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400;
  text-decoration: underline orange;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  height: 60%;
  border: 2px solid rgba(0, 0, 0, .6);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  height: 100%;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  border: 1px solid black;
`;

export const IconContainer = styled.div`
  width: 26px;
  height: 26px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

export const BtnBox = styled.div`
  text-align: center;
`;